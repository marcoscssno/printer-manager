type MongoDBPrinterSupplyTypeDTO = {
    readonly _id: string,
    name: string,
    readonly createdAt: Date,
    readonly createdBy: string,
    lastUpdatedAt?: Date | null,
    lastUpdatedBy?: string | null,
    isDeleted: boolean,
    deletedAt?: Date | null
};

export {
    MongoDBPrinterSupplyTypeDTO
};
