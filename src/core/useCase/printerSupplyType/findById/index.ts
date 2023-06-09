import { FindPrinterSupplyTypeByIdUseCase } from "@useCase/printerSupplyType/findById/findPrinterSupplyTypeByIdUseCase";
import { FindPrinterSupplyTypeByIdController } from "@useCase/printerSupplyType/findById/findPrinterSupplyTypeByIdController";
import { inMemoryPrinterSupplyTypeRepository } from "@repository/printerSupplyType/implementation/InMemoryPrinterSupplyTypeRepository";

const findPrinterSupplyTypeByIdUseCase = new FindPrinterSupplyTypeByIdUseCase(inMemoryPrinterSupplyTypeRepository);

const findPrinterSupplyTypeByIdController = new FindPrinterSupplyTypeByIdController(findPrinterSupplyTypeByIdUseCase);

export {
    findPrinterSupplyTypeByIdUseCase,
    findPrinterSupplyTypeByIdController
}