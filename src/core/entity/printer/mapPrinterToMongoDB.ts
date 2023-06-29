import { MongoDBPrinterDTO } from "./MongoDBPrinterDTO";
import { PrinterProps } from "./PrinterProps";

const mapPrinterToMongoDB = (printer: PrinterProps): MongoDBPrinterDTO => {
    const mongoDBPrinter = {
        _id: printer.id,
        ipAddress: printer.ipAddress,
        manufacturer: printer.manufacturer,
        model: printer.model,
        serialNumber: printer.serialNumber,
        propertyNumber: printer.propertyNumber,
        supply: printer.supply,
        createdAt: printer.createdAt,
        createdBy: printer.createdBy,
        lastUpdatedAt: printer.lastUpdatedAt,
        lastUpdatedBy: printer.lastUpdatedBy,
        isDeleted: printer.isDeleted,
        deletedAt: printer.deletedAt
    }
    return mongoDBPrinter;
};

export {
    mapPrinterToMongoDB
};
