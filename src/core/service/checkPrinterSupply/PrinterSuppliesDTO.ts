type PrinterSuppliesDTO = {
    printerId: string | null,
    tonerLevel: string | null,
    pcdrumLevel: string | null,
    fuserLevel: string | null,
    checkedAt: Date | null;
    error: boolean,
    errorMessage: string | null,
}

export {
    PrinterSuppliesDTO
};
