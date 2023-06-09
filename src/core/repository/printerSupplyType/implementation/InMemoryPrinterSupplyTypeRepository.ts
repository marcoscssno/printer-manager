import { PrinterSupplyTypeProps } from "@entity/printerSupplyType/PrinterSupplyTypeProps";
import { PrinterSupplyTypeRepositoryInterface } from "@repository/printerSupplyType/PrinterSupplyTypeRepositoryInterface";

class InMemoryPrinterSupplyTypeRepository implements PrinterSupplyTypeRepositoryInterface {
    private printerSupplyTypes: PrinterSupplyTypeProps[] = [];
    constructor() { }
    async save(printerSupplyType: PrinterSupplyTypeProps): Promise<void> {
        this.printerSupplyTypes.push(printerSupplyType);
    }
    async findById(id: string): Promise<PrinterSupplyTypeProps | null> {
        const printerSupplyType = this.printerSupplyTypes.find(printerSupplyType => printerSupplyType.id === id && printerSupplyType.isDeleted === false);
        return printerSupplyType || null;
    }
    async findByName(name: string): Promise<PrinterSupplyTypeProps | null> {
        const printerSupplyType = this.printerSupplyTypes.find(printerSupplyType => printerSupplyType.name === name && printerSupplyType.isDeleted === false);
        return printerSupplyType || null;
    }
    async findAll(): Promise<PrinterSupplyTypeProps[] | []> {
        const printerSupplyTypes = this.printerSupplyTypes.filter(printerSupplyType => printerSupplyType.isDeleted == false);
        return printerSupplyTypes;
    }
    async update(id: string, printerSupplyType: PrinterSupplyTypeProps): Promise<void> {
        const targetPrinterSupplyType = this.printerSupplyTypes.find(printerSupplyType => printerSupplyType.id === id && printerSupplyType.isDeleted === false);
        if (targetPrinterSupplyType) {
            if (printerSupplyType.name !== undefined) {
                targetPrinterSupplyType.name = printerSupplyType.name;
            }
            if (printerSupplyType.lastUpdatedAt !== undefined) {
                targetPrinterSupplyType.lastUpdatedAt = printerSupplyType.lastUpdatedAt;
            }
            if (printerSupplyType.lastUpdatedBy !== undefined) {
                targetPrinterSupplyType.lastUpdatedBy = printerSupplyType.lastUpdatedBy;
            }
            if (printerSupplyType.isDeleted !== undefined) {
                targetPrinterSupplyType.isDeleted = printerSupplyType.isDeleted;
            }
            if (printerSupplyType.deletedAt !== undefined) {
                targetPrinterSupplyType.deletedAt = printerSupplyType.deletedAt;
            }
        }
    }
    async delete(id: string, date: Date): Promise<void> {
        const targetPrinterSupplyType = this.printerSupplyTypes.find(printerSupplyType => printerSupplyType.id === id);
        if (targetPrinterSupplyType) {
            targetPrinterSupplyType.isDeleted = true;
            targetPrinterSupplyType.deletedAt = date;
        }
    }
}

// Create a single instance of this repository for testing the API
// Otherwise, it's data won't be available for different use cases.
const inMemoryPrinterSupplyTypeRepository = new InMemoryPrinterSupplyTypeRepository();

export {
    InMemoryPrinterSupplyTypeRepository,
    inMemoryPrinterSupplyTypeRepository
};
