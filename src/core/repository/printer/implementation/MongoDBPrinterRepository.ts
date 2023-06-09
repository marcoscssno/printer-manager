import { MongoClient } from "mongodb";
import { Printer } from "@entity/printer/Printer";
import { PrinterRepositoryInterface } from "@repository/printer/PrinterRepositoryInterface";

class MongoDBPrinterRepository implements PrinterRepositoryInterface {
    private client: MongoClient;
    constructor(client: MongoClient) {
        this.client = client;
    }
    findBySerialNumber(serialNumber: string): Promise<Printer | null> {
        throw new Error("Method not implemented.");
    }
    async save(printer: Printer): Promise<void> {
        try {
            const newPrinter = {
                _id: printer.getId(),
                ipAddress: printer.getIpAddress(),
                manufacturer: printer.getManufacturer(),
                model: printer.getModel(),
                serialNumber: printer.getSerialNumber(),
                propertyNumber: printer.getPropertyNumber(),
                createdAt: printer.getCreatedAt(),
                createdBy: printer.getCreatedBy(),
                lastUpdatedAt: printer.getLastUpdatedAt(),
                lastUpdatedBy: printer.getLastUpdatedBy(),
                isDeleted: printer.getIsDeleted(),
                deletedAt: printer.getDeletedAt()
            }
            console.log(newPrinter);
            await this.client.db('printers').collection<{ _id: string }>('myPrinters').insertOne(newPrinter);
        }
        catch (error) {
            console.error(error);
        }
    }
    findById(id: string): Promise<Printer | null> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<[] | Printer[]> {
        throw new Error("Method not implemented.");
    }
    update(id: string, printer: Printer): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}

export {
    MongoDBPrinterRepository
};
