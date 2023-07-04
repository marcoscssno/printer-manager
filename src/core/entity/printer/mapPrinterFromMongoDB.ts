import { mapPrinterSupplyFromMongoDB } from "@entity/printerSupply/mapPrinterSupplyFromMongoDB";
import { MongoDBPrinterDTO } from "./MongoDBPrinterDTO";
import { Printer } from "./Printer";
import { MongoDBPrinterSupplyDTO } from "@entity/printerSupply/MongoDBPrinterSupplyDTO";
import { PrinterSupplyProps } from "@entity/printerSupply/PrinterSupplyProps";

const mapPrinterFromMongoDB = (printerFromMongoDB: MongoDBPrinterDTO): Printer => {
    let supply: PrinterSupplyProps[] = [];
    if(printerFromMongoDB.supply) {
        if(printerFromMongoDB.supply.length > 0) {
            printerFromMongoDB.supply.forEach(printerSupplyFromMongoDB => {
                supply.push(mapPrinterSupplyFromMongoDB(printerSupplyFromMongoDB).getProps());
            });
        }
    }
    const printer = new Printer({
        ipAddress: printerFromMongoDB.ipAddress,
        manufacturer: printerFromMongoDB.manufacturer,
        model: printerFromMongoDB.model,
        serialNumber: printerFromMongoDB.serialNumber,
        propertyNumber: printerFromMongoDB.propertyNumber,
        supply: supply,
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
