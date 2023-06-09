import { Printer } from "@entity/printer/Printer";
import { PrinterRepositoryInterface } from "@repository/printer/PrinterRepositoryInterface";
import { CreatePrinterRequestDTO } from "@useCase/printer/create/createPrinterRequestDTO";

class UpdatePrinterUseCase {
    constructor(
        private printerRepository: PrinterRepositoryInterface
    ) { }
    async execute(id, data: CreatePrinterRequestDTO): Promise<void> {
        const printerExists = await this.printerRepository.findById(id);
        if (!printerExists) {
            throw new Error(`Printer with id ${id} was not found`);
        }
        const { ipAddress, manufacturer, model, serialNumber, propertyNumber } = data;
        const createdAt = printerExists.createdAt;
        const createdBy = printerExists.createdBy;
        const lastUpdatedAt = new Date();
        const lastUpdatedBy = 'user';
        const isDeleted = false;
        const deletedAt = null;
        const printerProps = {
            ipAddress,
            manufacturer,
            model,
            serialNumber,
            propertyNumber,
            createdAt,
            createdBy,
            lastUpdatedAt,
            lastUpdatedBy,
            isDeleted,
            deletedAt,
        }
        const printer: Printer = new Printer(printerProps, id);
        await this.printerRepository.update(id, printer.getProps());
    }
}

export {
    UpdatePrinterUseCase
};
