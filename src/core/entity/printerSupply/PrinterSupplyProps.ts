type PrinterSupplyProps = {
    id: string,
    printerSupplyTypeId: string,
    name: string,
    level?: number | null,
    readonly createdAt: Date,
    readonly createdBy: string,
    lastUpdatedAt?: Date | null,
    lastUpdatedBy?: string | null,
    isDeleted: boolean,
    deletedAt?: Date | null
}

export {
    PrinterSupplyProps
};
