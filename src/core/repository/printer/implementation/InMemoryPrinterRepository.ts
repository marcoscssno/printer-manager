import { PrinterProps } from "@entity/printer/PrinterProps";
import { PrinterRepositoryInterface } from "../PrinterRepositoryInterface";

class InMemoryPrinterRepository implements PrinterRepositoryInterface {
    private printers: PrinterProps[] = [];
    constructor() { }
    async save(printer: PrinterProps): Promise<void> {
        this.printers.push(printer);
    }
    async findById(id: string): Promise<PrinterProps | null> {
        const printer = this.printers.find(printer => printer.id === id && printer.isDeleted === false);
        return printer || null;
    }
    async findBySerialNumber(serialNumber: string): Promise<PrinterProps | null> {
        const printer = this.printers.find(printer => printer.serialNumber === serialNumber && printer.isDeleted === false);
        return printer || null;
    }
    async findAll(): Promise<PrinterProps[] | []> {
        const printers = this.printers.filter(printer => printer.isDeleted == false);
        return printers;
    }
    async update(id: string, printer: PrinterProps): Promise<void> {
        const targetPrinter = this.printers.find(printer => printer.id === id && printer.isDeleted === false);
        if (targetPrinter) {
            if(printer.ipAddress !== undefined) {
                targetPrinter.ipAddress = printer.ipAddress;
            }
            if(printer.manufacturer !== undefined) {
                targetPrinter.manufacturer = printer.manufacturer;
            }
            if(printer.model !== undefined) {
                targetPrinter.model = printer.model;
            }
            if(printer.serialNumber !== undefined) {
                targetPrinter.serialNumber = printer.serialNumber;
            }
            if(printer.propertyNumber !== undefined) {
                targetPrinter.propertyNumber = printer.propertyNumber;
            }
            if(printer.lastUpdatedAt !== undefined) {
                targetPrinter.lastUpdatedAt = printer.lastUpdatedAt;
            }
            if(printer.lastUpdatedBy !== undefined) {
                targetPrinter.lastUpdatedBy = printer.lastUpdatedBy;
            }
            if(printer.isDeleted !== undefined) {
                targetPrinter.isDeleted = printer.isDeleted;
            }
            if(printer.deletedAt !== undefined) {
                targetPrinter.deletedAt = printer.deletedAt;
            }
        }
    }
    async delete(id: string, date: Date): Promise<void> {
        const targetPrinter = this.printers.find(printer => printer.id === id);
        if (targetPrinter) {
            targetPrinter.isDeleted = true;
            targetPrinter.deletedAt = date;
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