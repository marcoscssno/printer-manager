import { Printer } from "../entity/printer/Printer";

interface PrinterRepositoryInterface {
    save(printer: Printer): Promise<void>;
    findById(id: string): Promise<Printer>;
    findAll(): Promise<Printer[] | []>;
    update(id: string, printer: Printer): Promise<void>;
    delete(id: string): Promise<void>;
}

export {
    PrinterRepositoryInterface
}