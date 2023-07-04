import { MongoDBPrinterSupplyDTO } from "@entity/printerSupply/MongoDBPrinterSupplyDTO";
import { PrinterSupply } from "@entity/printerSupply/PrinterSupply";
import { PrinterSupplyTypeProps } from "@entity/printerSupplyType/PrinterSupplyTypeProps";
import { mapPrinterSupplyTypeFromMongoDB } from "@entity/printerSupplyType/mapPrinterSupplyTypeFromMongoDB";

const mapPrinterSupplyFromMongoDB = (printerSupplyFromMongoDB: MongoDBPrinterSupplyDTO): PrinterSupply => {
    let printerSupplyType: PrinterSupplyTypeProps | null = null;
    if(printerSupplyFromMongoDB.printerSupplyType) {
        printerSupplyType = mapPrinterSupplyTypeFromMongoDB(printerSupplyFromMongoDB.printerSupplyType).getProps();
    }
    const printerSupply = new PrinterSupply({
        printerSupplyTypeId: printerSupplyFromMongoDB.printerSupplyTypeId,
        printerSupplyType,
        level: printerSupplyFromMongoDB.level,
        createdAt: printerSupplyFromMongoDB.createdAt,
        createdBy: printerSupplyFromMongoDB.createdBy,
        lastUpdatedAt: printerSupplyFromMongoDB.lastUpdatedAt,
        lastUpdatedBy: printerSupplyFromMongoDB.lastUpdatedBy,
        isDeleted: printerSupplyFromMongoDB.isDeleted,
        deletedAt: printerSupplyFromMongoDB.deletedAt,
    },
    printerSupplyFromMongoDB._id);
    return printerSupply;
}

export {
    mapPrinterSupplyFromMongoDB
};
