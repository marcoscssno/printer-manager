import { MongoDBPrinterSupplyDTO } from "@entity/printerSupply/MongoDBPrinterSupplyDTO";
import { PrinterSupplyProps } from "@entity/printerSupply/PrinterSupplyProps";
import { MongoDBPrinterSupplyTypeDTO } from "@entity/printerSupplyType/MongoDBPrinterSupplyTypeDTO";
import { PrinterSupplyTypeProps } from "@entity/printerSupplyType/PrinterSupplyTypeProps";
import { mapPrinterSupplyTypeToMongoDB } from "@entity/printerSupplyType/mapPrinterSupplyTypeToMongoDB";

const mapPrinterSupplyToMongoDB = (printerSupply: PrinterSupplyProps): MongoDBPrinterSupplyDTO => {
    let printerSupplyType: MongoDBPrinterSupplyTypeDTO | null = null;
    if(printerSupply.printerSupplyType) {
        printerSupplyType = mapPrinterSupplyTypeToMongoDB(printerSupply.printerSupplyType)
    }
    const mongoDBPrinterSupply: MongoDBPrinterSupplyDTO = {
        _id: printerSupply.id,
        printerSupplyTypeId: printerSupply.printerSupplyTypeId,
        printerSupplyType,
        level: printerSupply.level,
        createdAt: printerSupply.createdAt,
        createdBy: printerSupply.createdBy,
        lastUpdatedAt: printerSupply.lastUpdatedAt,
        lastUpdatedBy: printerSupply.lastUpdatedBy,
        isDeleted: printerSupply.isDeleted,
        deletedAt: printerSupply.deletedAt,
    }
    return mongoDBPrinterSupply;
};

export {
    mapPrinterSupplyToMongoDB
};
