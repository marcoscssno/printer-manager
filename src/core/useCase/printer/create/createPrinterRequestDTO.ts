import { PrinterSupplyProps } from "@entity/printerSupply/PrinterSupplyProps";

type CreatePrinterRequestDTO = {
    ipAddress?: string | null,
    manufacturer: string,
    model?: string | null,
    serialNumber?: string | null,
    propertyNumber?: number | null,
    supply?: PrinterSupplyProps[]
}

export {
    CreatePrinterRequestDTO
};
