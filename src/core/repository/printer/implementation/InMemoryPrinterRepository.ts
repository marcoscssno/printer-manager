import { Printer } from "@entity/printer/Printer";
import { PrinterRepositoryInterface } from "../PrinterRepositoryInterface";

class InMemoryPrinterRepository implements PrinterRepositoryInterface {
    private printers: Printer[] = [];
    constructor() { }
    async save(printer: Printer): Promise<void> {
        this.printers.push(printer);
    }
    async findById(id: string): Promise<Printer | null> {
        const printer = this.printers.find(printer => printer.getId() === id);
        return printer || null;
    }
    async findBySerialNumber(serialNumber: string): Promise<Printer | null> {
        const printer = this.printers.find(printer => printer.getSerialNumber() === serialNumber);
        return printer || null;
    }
    async findAll(): Promise<Printer[] | []> {
        return this.printers;
    }
    async update(id: string, printer: Printer): Promise<void> {
        const targetPrinter = this.printers.find(printer => printer.getId() === id);
        if (targetPrinter) {
            targetPrinter.setIpAddress(printer.getIpAddress());
            targetPrinter.setManufacturer(printer.getManufacturer());
            targetPrinter.setModel(printer.getModel());
            targetPrinter.setSerialNumber(printer.getSerialNumber());
            targetPrinter.setPropertyNumber(printer.getPropertyNumber());
            targetPrinter.setLastUpdatedAt(printer.getLastUpdatedAt());
            targetPrinter.setLastUpdatedBy(printer.getLastUpdatedBy());
            targetPrinter.setIsDeleted(printer.getIsDeleted());
            targetPrinter.setDeletedAt(printer.getDeletedAt());
        }
    }
    async delete(id: string): Promise<void> {
        const targetPrinter = printer => printer.getId() === id;
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