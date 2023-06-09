import { FindAllPrinterSupplyTypesUseCase } from "@useCase/printerSupplyType/findAll/findAllPrinterSupplyTypesUseCase";
import { FindAllPrinterSupplyTypesController } from "@useCase/printerSupplyType/findAll/findAllPrinterSupplyTypesController";
import { inMemoryPrinterSupplyTypeRepository } from "@repository/printerSupplyType/implementation/InMemoryPrinterSupplyTypeRepository";

const findAllPrinterSupplyTypesUseCase = new FindAllPrinterSupplyTypesUseCase(inMemoryPrinterSupplyTypeRepository);

const findAllPrinterSupplyTypesController = new FindAllPrinterSupplyTypesController(findAllPrinterSupplyTypesUseCase);

export {
    findAllPrinterSupplyTypesUseCase, findAllPrinterSupplyTypesController
};
