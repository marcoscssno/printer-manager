import { MongoDBPrinterSupplyTypeDTO } from "@entity/printerSupplyType/MongoDBPrinterSupplyTypeDTO";
import { PrinterSupplyType } from "@entity/printerSupplyType/PrinterSupplyType";

const mapPrinterSupplyTypeFromMongoDB = (printerSupplyTypeFromMongoDB: MongoDBPrinterSupplyTypeDTO): PrinterSupplyType => {
    const printerSupplyType = new PrinterSupplyType({
        name: printerSupplyTypeFromMongoDB.name,
        createdAt: printerSupplyTypeFromMongoDB.createdAt,
        createdBy: printerSupplyTypeFromMongoDB.createdBy,
        lastUpdatedAt: printerSupplyTypeFromMongoDB.lastUpdatedAt,
        lastUpdatedBy: printerSupplyTypeFromMongoDB.lastUpdatedBy,
        isDeleted: printerSupplyTypeFromMongoDB.isDeleted,
        deletedAt: printerSupplyTypeFromMongoDB.deletedAt
    },
    printerSupplyTypeFromMongoDB._id);
    return printerSupplyType;
}

export {
    mapPrinterSupplyTypeFromMongoDB
};
