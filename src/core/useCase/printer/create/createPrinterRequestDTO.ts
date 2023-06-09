type CreatePrinterRequestDTO = {
    ipAddress?: string | null,
    manufacturer: string,
    model?: string | null,
    serialNumber?: string | null,
    propertyNumber?: number | null,
}

export {
    CreatePrinterRequestDTO
};
