import { PrinterSupplyProps } from "@entity/printerSupply/PrinterSupplyProps"

interface PrinterProps {
    readonly id: string,
    ipAddress?: string | null,
    manufacturer: string,
    model?: string | null,
    serialNumber?: string | null,
    propertyNumber?: number | null,
    supply?: PrinterSupplyProps[],
    readonly createdAt: Date,
    readonly createdBy: string,
    lastUpdatedAt?: Date | null,
    lastUpdatedBy?: string | null,
    isDeleted: boolean,
    deletedAt?: Date | null
}

export {
    PrinterProps
}