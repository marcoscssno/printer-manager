import { PrinterSupplyTypeProps } from "@entity/printerSupplyType/PrinterSupplyTypeProps";
import { PrinterSupplyTypeRepositoryInterface } from "@repository/printerSupplyType/PrinterSupplyTypeRepositoryInterface";

class FindPrinterSupplyTypeByIdUseCase {
    constructor(private printerSupplyTypeRepository: PrinterSupplyTypeRepositoryInterface) {}
    async execute(id: string): Promise<PrinterSupplyTypeProps | null> {
        const printerSupplyType = await this.printerSupplyTypeRepository.findById(id);
        return printerSupplyType || null;
    }
}

export {
    FindPrinterSupplyTypeByIdUseCase
}
