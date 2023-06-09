import { PrinterSupplyTypeRepositoryInterface } from "@repository/printerSupplyType/PrinterSupplyTypeRepositoryInterface";
import { PrinterSupplyTypeProps } from "@entity/printerSupplyType/PrinterSupplyTypeProps";

class FindAllPrinterSupplyTypesUseCase {
    constructor(
        private printerSupplyTypeRepository: PrinterSupplyTypeRepositoryInterface
    ) {}
    async execute(): Promise<PrinterSupplyTypeProps[] | []> {
        const printerSupplyTypes = await this.printerSupplyTypeRepository.findAll();
        return printerSupplyTypes;
    }
}

export {
    FindAllPrinterSupplyTypesUseCase
}