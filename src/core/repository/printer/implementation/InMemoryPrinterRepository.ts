import { PrinterProps } from "@entity/printer/PrinterProps";
import { PrinterRepositoryInterface } from "../PrinterRepositoryInterface";

class InMemoryPrinterRepository implements PrinterRepositoryInterface {
    private printers: PrinterProps[] = [];
    constructor() { }
    async save(printer: PrinterProps): Promise<void> {
        this.printers.push(printer);
    }
    async findById(id: string): Promise<PrinterProps | null> {
        const printer = this.printers.find(printer => printer.id === id);
        return printer || null;
    }
    async findBySerialNumber(serialNumber: string): Promise<PrinterProps | null> {
        const printer = this.printers.find(printer => printer.serialNumber === serialNumber);
        return printer || null;
    }
    async findAll(): Promise<PrinterProps[] | []> {
        return this.printers;
    }
    async update(id: string, printer: PrinterProps): Promise<void> {
        const targetPrinter = this.printers.find(printer => printer.id === id);
        if (targetPrinter) {
            targetPrinter.ipAddress = printer.ipAddress;
            targetPrinter.manufacturer = printer.manufacturer;
            targetPrinter.model = printer.model;
            targetPrinter.serialNumber = printer.serialNumber;
            targetPrinter.propertyNumber = printer.propertyNumber;
            targetPrinter.lastUpdatedAt = printer.lastUpdatedAt;
            targetPrinter.lastUpdatedBy = printer.lastUpdatedBy;
            targetPrinter.isDeleted = printer.isDeleted;
            targetPrinter.deletedAt = printer.deletedAt;
        }
    }
    async delete(id: string): Promise<void> {
        const targetPrinter = printer => printer.id === id;
        const targetPrinterIndex = this.printers.findIndex(targetPrinter);
        const targetPrinterExists = targetPrinterIndex >= 0;
        if (targetPrinterExists) {
            this.printers.splice(targetPrinterIndex, 1);
        }
    }
}

// Create a single instance of this repository for testing the API
// Otherwise, it's data won't be available for different use cases.
const inMemoryPrinterRepository = new InMemoryPrinterRepository();

export {
    InMemoryPrinterRepository,
    inMemoryPrinterRepository
}