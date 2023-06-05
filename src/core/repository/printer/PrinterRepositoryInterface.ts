import { PrinterProps } from "@entity/printer/PrinterProps";

interface PrinterRepositoryInterface {
    save(printer: PrinterProps): Promise<void>;
    findById(id: string): Promise<PrinterProps | null>;
    findBySerialNumber(serialNumber: string): Promise<PrinterProps | null>
    findAll(): Promise<PrinterProps[] | []>;
    update(id: string, printer: PrinterProps): Promise<void>;
    delete(id: string, date: Date): Promise<void>;
}

export {
    PrinterRepositoryInterface
}