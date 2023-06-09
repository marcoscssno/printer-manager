import { PrinterSupplyTypeRepositoryInterface } from "@repository/printerSupplyType/PrinterSupplyTypeRepositoryInterface";

class DeletePrinterSupplyTypeUseCase {
    constructor(
        private printerSupplyTypeRepository: PrinterSupplyTypeRepositoryInterface
    ) {}
    async execute(id: string): Promise<void> {
        const printerSupplyTypeExists = await this.printerSupplyTypeRepository.findById(id);
        if(!printerSupplyTypeExists) {
            throw new Error(`Printer Supply Type with id ${id} was not found`);
        }
        const date = new Date();
        await this.printerSupplyTypeRepository.delete(id, date);
    }
}

export {
    DeletePrinterSupplyTypeUseCase
};
