import { MongoDBPrinterSupplyTypeDTO } from "@entity/printerSupplyType/MongoDBPrinterSupplyTypeDTO";
import { PrinterSupplyTypeProps } from "@entity/printerSupplyType/PrinterSupplyTypeProps";
import { mapPrinterSupplyTypeFromMongoDB } from "@entity/printerSupplyType/mapPrinterSupplyTypeFromMongoDB";
import { mapPrinterSupplyTypeToMongoDB } from "@entity/printerSupplyType/mapPrinterSupplyTypeToMongoDB";
import { mongoDBHelper } from "@helper/MongoDBHelper";
import { PrinterSupplyTypeRepositoryInterface } from "@repository/printerSupplyType/PrinterSupplyTypeRepositoryInterface";

class MongoDBPrinterSupplyTypeRepository implements PrinterSupplyTypeRepositoryInterface {
    async save(printerSupplyType: PrinterSupplyTypeProps): Promise<void> {
        const client = await mongoDBHelper.getClient();
        try {
            const mongoDBPrinterSupplyType = mapPrinterSupplyTypeToMongoDB(printerSupplyType);
            await client.db().collection<MongoDBPrinterSupplyTypeDTO>("printerSupplyTypes").insertOne(mongoDBPrinterSupplyType);
        }
        catch (error) {
            console.error(error);
        }
    }
    async findById(id: string): Promise<PrinterSupplyTypeProps | null> {
        const client = await mongoDBHelper.getClient();
        const printerFromMongoDB = await client.db().collection<MongoDBPrinterSupplyTypeDTO>("printerSupplyTypes").findOne({ _id: id, isDeleted: false });
        if(!printerFromMongoDB) {
            return null;
        }
        const printerSupplyType = mapPrinterSupplyTypeFromMongoDB(printerFromMongoDB);
        return printerSupplyType.getProps();
    }
    async findByName(name: string): Promise<PrinterSupplyTypeProps | null> {
        const client = await mongoDBHelper.getClient();
        const printerFromMongoDB = await client.db().collection<MongoDBPrinterSupplyTypeDTO>("printerSupplyTypes").findOne({ name, isDeleted: false });
        if(!printerFromMongoDB) {
            return null;
        }
        const printerSupplyType = mapPrinterSupplyTypeFromMongoDB(printerFromMongoDB);
        return printerSupplyType.getProps();
    }
    async findAll(): Promise<[] | PrinterSupplyTypeProps[]> {
        let printers: PrinterSupplyTypeProps[] = []
        const client = await mongoDBHelper.getClient();
        const printersFromMongoDB = await client.db().collection<MongoDBPrinterSupplyTypeDTO>("printerSupplyTypes").find({ isDeleted: false }).toArray();
        printersFromMongoDB.forEach(printerFromMongoDB => {
            const printerSupplyType = mapPrinterSupplyTypeFromMongoDB(printerFromMongoDB);
            printers.push(printerSupplyType.getProps());
        });
        return printers;
    }
    async update(id: string, printerSupplyType: PrinterSupplyTypeProps): Promise<void> {
        const mongoDBPrinterSupplyType = mapPrinterSupplyTypeToMongoDB(printerSupplyType);
        const client = await mongoDBHelper.getClient();
        await client.db().collection<MongoDBPrinterSupplyTypeDTO>("printerSupplyTypes").findOneAndUpdate({ _id: id, isDeleted: false }, { $set: mongoDBPrinterSupplyType });
    }
    async delete(id: string, date: Date): Promise<void> {
        const client = await mongoDBHelper.getClient();
        await client.db().collection<MongoDBPrinterSupplyTypeDTO>("printerSupplyTypes").findOneAndUpdate({ _id: id, isDeleted: false }, { $set: { isDeleted: true, deletedAt: date }});
    }

}

export {
    MongoDBPrinterSupplyTypeRepository
};
