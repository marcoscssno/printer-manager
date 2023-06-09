import { CreatePrinterSupplyTypeUseCase } from "@useCase/printerSupplyType/create/createPrinterSupplyTypeUseCase";
import { CreatePrinterSupplyTypeController } from "@useCase/printerSupplyType/create/createPrinterSupplyTypeController";
import { inMemoryPrinterSupplyTypeRepository } from "@repository/printerSupplyType/implementation/InMemoryPrinterSupplyTypeRepository";

const createPrinterSupplyTypeUseCase = new CreatePrinterSupplyTypeUseCase(inMemoryPrinterSupplyTypeRepository);

const createPrinterSupplyTypeController = new CreatePrinterSupplyTypeController(createPrinterSupplyTypeUseCase);

export {
    createPrinterSupplyTypeUseCase,
    createPrinterSupplyTypeController
};
