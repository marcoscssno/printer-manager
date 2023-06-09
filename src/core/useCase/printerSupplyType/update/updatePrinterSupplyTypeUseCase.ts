import { PrinterSupplyTypeRepositoryInterface } from "@repository/printerSupplyType/PrinterSupplyTypeRepositoryInterface";
import { CreatePrinterSupplyTypeRequestDTO } from "@useCase/printerSupplyType/create/createPrinterSupplyTypeRequestDTO";
import { PrinterSupplyType } from "@entity/printerSupplyType/PrinterSupplyType";

class UpdatePrinterSupplyTypeUseCase {
    constructor(
        private printerSupplyTypeRepository: PrinterSupplyTypeRepositoryInterface
    ) {}
    async execute(id, data: CreatePrinterSupplyTypeRequestDTO): Promise<void> {
        const printerSupplyTypeExists = await this.printerSupplyTypeRepository.findById(id);
        if(!printerSupplyTypeExists) {
            throw new Error(`PrinterSupplyType with id ${id} was not found`);
        }
        const { name } = data;
        const createdAt = printerSupplyTypeExists.createdAt;
        const createdBy = printerSupplyTypeExists.createdBy;
        const lastUpdatedAt = new Date();
        const lastUpdatedBy = 'user';
        const isDeleted = false;
        const deletedAt = null;
        const printerSupplyTypeProps = {
            name,
            createdAt,
            createdBy,
            lastUpdatedAt,
            lastUpdatedBy,
            isDeleted,
            deletedAt,
        }
        const printerSupplyType: PrinterSupplyType = new PrinterSupplyType(printerSupplyTypeProps, id);
        await this.printerSupplyTypeRepository.update(id, printerSupplyType.getProps());
    }
}

export {
    UpdatePrinterSupplyTypeUseCase
}