import { PrinterSupply } from "@entity/printerSupply/PrinterSupply";

type CreatePrinterRequestDTO = {
    ipAddress?: string | null,
    manufacturer: string,
    model: string,
    serialNumber?: string | null,
    propertyNumber?: string | null,
    supply?: PrinterSupply[] | null
}

export {
    CreatePrinterRequestDTO
}