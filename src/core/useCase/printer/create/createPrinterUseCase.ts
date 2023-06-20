import { Printer } from "@entity/printer/Printer";
import { PrinterRepositoryInterface } from "@repository/printer/PrinterRepositoryInterface";
import { CreatePrinterRequestDTO } from "./createPrinterRequestDTO";
import { Printer } from "@entity/printer/Printer";
import { PrinterSupply } from "@entity/printerSupply/PrinterSupply";
import { PrinterSupplyProps } from "@entity/printerSupply/PrinterSupplyProps";

class CreatePrinterUseCase {
    constructor(
        private printerRepository: PrinterRepositoryInterface
    ) { }
    async execute(data: CreatePrinterRequestDTO): Promise<void> {
        const { ipAddress, manufacturer, model, serialNumber, propertyNumber, supply } = data;
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
        const supplies: PrinterSupplyProps[] = [];
        if (supply) {
            supply.forEach((element) => {
                const newSupply = new PrinterSupply({
                    ...element,
                    createdAt,
                    createdBy,
                    lastUpdatedAt,
                    lastUpdatedBy,
                    isDeleted,
                    deletedAt
                });
                supplies.push(newSupply.getProps());
            });
        }
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
            supply: supplies
        }
        const printer: Printer = new Printer(printerProps);
        await this.printerRepository.save(printer.getProps());
    }
}

export {
    CreatePrinterUseCase
};
