import { PrinterProps } from "@entity/printer/PrinterProps";
import { PrinterRepositoryInterface } from "@repository/printer/PrinterRepositoryInterface";

class FindAllPrintersUseCase {
    constructor(
        private printerRepository: PrinterRepositoryInterface
    ) { }
    async execute(): Promise<PrinterProps[] | []> {
        const printers = this.printerRepository.findAll();
        return printers;
    }
}

export {
    FindAllPrintersUseCase
};
