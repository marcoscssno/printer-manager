import { PrinterRepositoryInterface } from "@repository/printer/PrinterRepositoryInterface";
import { Printer } from "@entity/printer/Printer";

class FindAllPrintersUseCase {
    constructor(
        private printerRepository: PrinterRepositoryInterface
    ) {}
    async execute(): Promise<Printer[] | []> {
        const printers = this.printerRepository.findAll();
        return printers;
    }
}

export {
    FindAllPrintersUseCase
}