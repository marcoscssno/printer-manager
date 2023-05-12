import { PrinterSupply } from "../printerSupply/PrinterSupply"

interface PrinterProperties {
    id?: string,
    ipAddress?: string | null,
    manufacturer: string,
    model: string,
    serialNumber?: string | null,
    propertyNumber?: string | null,
    supply?: PrinterSupply[] | null,
    createdAt: Date,
    createdBy: string,
    lastUpdatedAt: Date,
    lastUpdatedBy: string,
    isDeleted: boolean,
    deletedAt: Date | null
}

export {
    PrinterProperties
}