import { PrinterProps } from "@entity/printer/PrinterProps";
import { PrinterRepositoryInterface } from "../PrinterRepositoryInterface";
import { mongoDBHelper } from "@helper/MongoDBHelper";

class MongoDBPrinterRepository implements PrinterRepositoryInterface {
    async findBySerialNumber(serialNumber: string): Promise<PrinterProps | null> {
        const client = await mongoDBHelper.getClient();
        const printer = await client.db().collection<PrinterProps>("printers").findOne({ serialNumber });
        return printer || null;
    }
    async save(printer: PrinterProps): Promise<void> {
        const client = await mongoDBHelper.getClient();
        try {
            const newPrinter = {
                _id: printer.id,
                ipAddress: printer.ipAddress,
                manufacturer: printer.manufacturer,
                model: printer.model,
                serialNumber: printer.serialNumber,
                propertyNumber: printer.propertyNumber,
                createdAt: printer.createdAt,
                createdBy: printer.createdBy,
                lastUpdatedAt: printer.lastUpdatedAt,
                lastUpdatedBy: printer.lastUpdatedBy,
                isDeleted: printer.isDeleted,
                deletedAt: printer.deletedAt
            }
            await client.db().collection<{ _id: string} >("printers").insertOne(newPrinter);
        }
        catch (error) {
            console.error(error);
        }
    }
    findById(id: string): Promise<PrinterProps | null> {
        throw new Error("Method not implemented.");
    }
    async findAll(): Promise<[] | PrinterProps[]> {
        const client = await mongoDBHelper.getClient();
        const printers = await client.db().collection<PrinterProps>("printers").find().toArray();
        return printers;
    }
    update(id: string, printer: PrinterProps): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}

export {
    MongoDBPrinterRepository
}