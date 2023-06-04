import { PrinterRepositoryInterface } from "@repository/printer/PrinterRepositoryInterface";
import { PrinterProps } from "@entity/printer/PrinterProps";

class FindAllPrintersUseCase {
    constructor(
        private printerRepository: PrinterRepositoryInterface
    ) {}
    async execute(): Promise<PrinterProps[] | []> {
        const printers = this.printerRepository.findAll();
        return printers;
    }
}

export {
    FindAllPrintersUseCase
}