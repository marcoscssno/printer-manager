import { PrinterSupplyTypeProps } from "@entity/printerSupplyType/PrinterSupplyTypeProps";

interface PrinterSupplyTypeRepositoryInterface {
    save(printerSupplyType: PrinterSupplyTypeProps): Promise<void>;
    findById(id: string): Promise<PrinterSupplyTypeProps | null>;
    findByName(name: string): Promise<PrinterSupplyTypeProps | null>;
    findAll(): Promise<PrinterSupplyTypeProps[] | []>;
    update(id: string, printerSupplyType: PrinterSupplyTypeProps): Promise<void>;
    delete(id: string, date: Date): Promise<void>;
}

export {
    PrinterSupplyTypeRepositoryInterface
};
