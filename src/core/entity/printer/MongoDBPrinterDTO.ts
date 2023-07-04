import { MongoDBPrinterSupplyDTO } from "@entity/printerSupply/MongoDBPrinterSupplyDTO";

type MongoDBPrinterDTO = {
    readonly _id: string,
    ipAddress?: string | null,
    manufacturer: string,
    model?: string | null,
    serialNumber?: string | null,
    propertyNumber?: number | null,
    supply?: MongoDBPrinterSupplyDTO[],
    readonly createdAt: Date,
    readonly createdBy: string,
    lastUpdatedAt?: Date | null,
    lastUpdatedBy?: string | null,
    isDeleted: boolean,
    deletedAt?: Date | null
};

export {
    MongoDBPrinterDTO
};
