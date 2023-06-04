import { PrinterProps } from "@entity/printer/PrinterProps";
import { PrinterRepositoryInterface } from "@repository/printer/PrinterRepositoryInterface";

class FindPrinterByIdUseCase {
    constructor(private printerRepository: PrinterRepositoryInterface) {}
    async execute(id: string): Promise<PrinterProps | null> {
        const printer = await this.printerRepository.findById(id);
        return printer || null;
    }
}

export {
    FindPrinterByIdUseCase
}
