import { PrinterSupplyTypeProps } from "@entity/printerSupplyType/PrinterSupplyTypeProps";

type PrinterSupplyProps = {
    readonly id: string,
    printerSupplyTypeId: string,
    printerSupplyType?: PrinterSupplyTypeProps | null,
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
