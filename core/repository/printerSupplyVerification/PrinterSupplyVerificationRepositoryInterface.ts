import { PrinterSuppliesDTO } from "../../service/checkPrinterSupply/PrinterSuppliesDTO"

interface PrinterSupplyVerificationRepositoryInterface {
    register(data: PrinterSuppliesDTO): Promise<void>;
    findAll(): Promise<any[] | []>;
}

export {
    PrinterSupplyVerificationRepositoryInterface
}