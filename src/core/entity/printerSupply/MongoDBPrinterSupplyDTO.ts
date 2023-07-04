import { MongoDBPrinterSupplyTypeDTO } from "@entity/printerSupplyType/MongoDBPrinterSupplyTypeDTO";

type MongoDBPrinterSupplyDTO = {
    readonly _id: string,
    printerSupplyTypeId: string,
    printerSupplyType?: MongoDBPrinterSupplyTypeDTO | null,
    level?: number | null,
    readonly createdAt: Date,
    readonly createdBy: string,
    lastUpdatedAt?: Date | null,
    lastUpdatedBy?: string | null,
    isDeleted: boolean,
    deletedAt?: Date | null
};

export {
    MongoDBPrinterSupplyDTO
};
