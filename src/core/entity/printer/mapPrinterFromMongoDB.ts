import { MongoDBPrinterDTO } from "./MongoDBPrinterDTO";
import { Printer } from "./Printer";

const mapPrinterFromMongoDB = (printerFromMongoDB: MongoDBPrinterDTO): Printer => {
    const printer = new Printer({
        ipAddress: printerFromMongoDB.ipAddress,
        manufacturer: printerFromMongoDB.manufacturer,
        model: printerFromMongoDB.model,
        serialNumber: printerFromMongoDB.serialNumber,
        propertyNumber: printerFromMongoDB.propertyNumber,
        createdAt: printerFromMongoDB.createdAt,
        createdBy: printerFromMongoDB.createdBy,
        lastUpdatedAt: printerFromMongoDB.lastUpdatedAt,
        lastUpdatedBy: printerFromMongoDB.lastUpdatedBy,
        isDeleted: printerFromMongoDB.isDeleted,
        deletedAt: printerFromMongoDB.deletedAt
    },
    printerFromMongoDB._id);
    return printer;
}

export {
    mapPrinterFromMongoDB
};
