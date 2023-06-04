import { PrinterRepositoryInterface } from "@repository/printer/PrinterRepositoryInterface";
import { CreatePrinterRequestDTO } from "./createPrinterRequestDTO";
import { Printer } from "@entity/printer/Printer";

class CreatePrinterUseCase {
    constructor(
        private printerRepository: PrinterRepositoryInterface
    ) { }
    async execute(data: CreatePrinterRequestDTO): Promise<void> {
        const { ipAddress, manufacturer, model, serialNumber, propertyNumber } = data;
        if (serialNumber) {
            const printerWithSameSerialNumberExists = await this.printerRepository.findBySerialNumber(serialNumber);
            if (printerWithSameSerialNumberExists) {
                throw new Error(`Printer with serial number ${serialNumber} already exists.`);
            }
        }
        const createdAt = new Date();
        const createdBy = 'user';
        const lastUpdatedAt = null;
        const lastUpdatedBy = null;
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
        const printer: Printer = new Printer(printerProps);
        await this.printerRepository.save(printer.getProps());
    }
}

export {
    CreatePrinterUseCase
}