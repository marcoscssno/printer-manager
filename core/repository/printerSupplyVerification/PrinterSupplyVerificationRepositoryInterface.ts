import { PrinterSuppliesDTO } from "../../service/PrinterSuppliesDTO"

interface PrinterSupplyVerificationRepositoryInterface {
    register(data: PrinterSuppliesDTO): Promise<void>;
    findAll(): Promise<any[] | []>;
}

export {
    PrinterSupplyVerificationRepositoryInterface
}