import { mapPrinterSupplyToMongoDB } from "@entity/printerSupply/mapPrinterSupplyToMongoDB";
import { MongoDBPrinterDTO } from "./MongoDBPrinterDTO";
import { PrinterProps } from "./PrinterProps";
import { MongoDBPrinterSupplyDTO } from "@entity/printerSupply/MongoDBPrinterSupplyDTO";

const mapPrinterToMongoDB = (printer: PrinterProps): MongoDBPrinterDTO => {
    let supply: MongoDBPrinterSupplyDTO[] = [];
    if(printer.supply) {
        if(printer.supply.length > 0) {
            printer.supply.forEach(printerSupply => {
                supply.push(mapPrinterSupplyToMongoDB(printerSupply));
            });
        }
    }
    const mongoDBPrinter = {
        _id: printer.id,
        ipAddress: printer.ipAddress,
        manufacturer: printer.manufacturer,
        model: printer.model,
        serialNumber: printer.serialNumber,
        propertyNumber: printer.propertyNumber,
        supply: supply,
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
