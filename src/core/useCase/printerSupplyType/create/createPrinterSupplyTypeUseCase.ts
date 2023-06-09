import { PrinterSupplyType } from "@entity/printerSupplyType/PrinterSupplyType";
import { PrinterSupplyTypeRepositoryInterface } from "@repository/printerSupplyType/PrinterSupplyTypeRepositoryInterface";
import { CreatePrinterSupplyTypeRequestDTO } from "@useCase/printerSupplyType/create/createPrinterSupplyTypeRequestDTO";

class CreatePrinterSupplyTypeUseCase {
    constructor(
        private printerSupplyTypeRepository: PrinterSupplyTypeRepositoryInterface
    ) { }
    async execute(data: CreatePrinterSupplyTypeRequestDTO): Promise<void> {
        const { name } = data;
        const printerWithSameNameExists = await this.printerSupplyTypeRepository.findByName(name);
        if (printerWithSameNameExists) {
            throw new Error(`Printer Supply Type with name ${name} already exists.`);
        }
        const createdAt = new Date();
        const createdBy = 'user';
        const lastUpdatedAt = null;
        const lastUpdatedBy = null;
        const isDeleted = false;
        const deletedAt = null;
        const printerProps = {
            name,
            createdAt,
            createdBy,
            lastUpdatedAt,
            lastUpdatedBy,
            isDeleted,
            deletedAt,
        }
        const printerSupplyType: PrinterSupplyType = new PrinterSupplyType(printerProps);
        await this.printerSupplyTypeRepository.save(printerSupplyType.getProps());
    }
}

export {
    CreatePrinterSupplyTypeUseCase
};
