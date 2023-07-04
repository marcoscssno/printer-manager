import { MongoDBPrinterSupplyTypeDTO } from "@entity/printerSupplyType/MongoDBPrinterSupplyTypeDTO";
import { PrinterSupplyTypeProps } from "@entity/printerSupplyType/PrinterSupplyTypeProps";

const mapPrinterSupplyTypeToMongoDB = (printerSupplyType: PrinterSupplyTypeProps): MongoDBPrinterSupplyTypeDTO => {
    const mongoDBPrinterSupplyType = {
        _id: printerSupplyType.id,
        name: printerSupplyType.name,
        createdAt: printerSupplyType.createdAt,
        createdBy: printerSupplyType.createdBy,
        lastUpdatedAt: printerSupplyType.lastUpdatedAt,
        lastUpdatedBy: printerSupplyType.lastUpdatedBy,
        isDeleted: printerSupplyType.isDeleted,
        deletedAt: printerSupplyType.deletedAt
    };
    return mongoDBPrinterSupplyType;
};

export {
    mapPrinterSupplyTypeToMongoDB
};
