import { PrinterRepositoryInterface } from "@repository/printer/PrinterRepositoryInterface";

class DeletePrinterUseCase {
    constructor(
        private printerRepository: PrinterRepositoryInterface
    ) {}
    async execute(id: string): Promise<void> {
        const printerExists = await this.printerRepository.findById(id);
        if(!printerExists) {
            throw new Error(`Printer with id ${id} was not found`);
        }
        const date = new Date();
        await this.printerRepository.delete(id, date);
    }
}

export {
    DeletePrinterUseCase
}
