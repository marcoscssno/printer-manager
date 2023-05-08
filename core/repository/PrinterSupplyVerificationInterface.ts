import { PrinterSuppliesDTO } from "../service/PrinterSuppliesDTO"

interface PrinterSupplyVerificationInterface {
    register(data: PrinterSuppliesDTO): Promise<void>;
    findAll(): Promise<any[] | []>;
}

export {
    PrinterSupplyVerificationInterface
}