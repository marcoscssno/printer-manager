import { PrinterProps } from "@entity/printer/PrinterProps";
import { PrinterRepositoryInterface } from "../PrinterRepositoryInterface";
import { mongoDBHelper } from "@helper/MongoDBHelper";
import { mapPrinterToMongoDB } from "@entity/printer/mapPrinterToMongoDB";
import { mapPrinterFromMongoDB } from "@entity/printer/mapPrinterFromMongoDB";
import { MongoDBPrinterDTO } from "@entity/printer/MongoDBPrinterDTO";
import { mapPrinterSupplyToMongoDB } from "@entity/printerSupply/mapPrinterSupplyToMongoDB";

class MongoDBPrinterRepository implements PrinterRepositoryInterface {
    async findBySerialNumber(serialNumber: string): Promise<PrinterProps | null> {
        const client = await mongoDBHelper.getClient();
        const printer = await client.db().collection<PrinterProps>("printers").findOne({ serialNumber });
        return printer || null;
    }
    async save(printer: PrinterProps): Promise<void> {
        const client = await mongoDBHelper.getClient();
        try {
            const mongoDBPrinter = mapPrinterToMongoDB(printer);
            await client.db().collection<MongoDBPrinterDTO>("printers").insertOne(mongoDBPrinter);
        }
        catch (error) {
            console.error(error);
        }
    }
    async findById(id: string): Promise<PrinterProps | null> {
        const client = await mongoDBHelper.getClient();
        const printerFromMongoDB = await client.db().collection<MongoDBPrinterDTO>("printers").findOne({ _id: id, isDeleted: false });
        if (!printerFromMongoDB) {
            return null;
        }
        const printer = mapPrinterFromMongoDB(printerFromMongoDB);
        return printer.getProps();
    }
    async findAll(): Promise<[] | PrinterProps[]> {
        let printers: PrinterProps[] = []
        const client = await mongoDBHelper.getClient();
        const printersFromMongoDB = await client.db().collection("printers").aggregate<MongoDBPrinterDTO>(
            [
                {
                    $lookup: {
                        from: "printerSupplyTypes",
                        localField: "supply.printerSupplyTypeId",
                        foreignField: "_id",
                        as: "printerSupplyTypes"
                    },
                },
                {
                    $addFields: {
                        supply: {
                            $map: {
                                input: "$supply",
                                as: "currentSupply",
                                in: {
                                    $mergeObjects: [
                                        "$$currentSupply",
                                        {
                                            printerSupplyType: {
                                                $arrayElemAt: [
                                                    "$printerSupplyTypes",
                                                    {
                                                        "$indexOfArray": [
                                                            "$printerSupplyTypes._id",
                                                            "$$currentSupply.printerSupplyTypeId"
                                                        ]
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    }
                }
            ]
        ).toArray();
        printersFromMongoDB.forEach(printerFromMongoDB => {
            console.log(printerFromMongoDB.manufacturer);
            const printer = mapPrinterFromMongoDB(printerFromMongoDB);
            printers.push(printer.getProps());
        });
        return printers;
    }
    async update(id: string, printer: PrinterProps): Promise<void> {
        const mongoDBPrinter = mapPrinterToMongoDB(printer);
        const client = await mongoDBHelper.getClient();
        await client.db().collection<MongoDBPrinterDTO>("printers").findOneAndUpdate({ _id: id, isDeleted: false }, { $set: mongoDBPrinter });
    }
    async delete(id: string, date: Date): Promise<void> {
        const client = await mongoDBHelper.getClient();
        await client.db().collection<MongoDBPrinterDTO>("printers").findOneAndUpdate({ _id: id, isDeleted: false }, { $set: { isDeleted: true, deletedAt: date } });
    }

}

export {
    MongoDBPrinterRepository
}