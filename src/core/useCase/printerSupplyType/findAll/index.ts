import { FindAllPrinterSupplyTypesUseCase } from "@useCase/printerSupplyType/findAll/findAllPrinterSupplyTypesUseCase";
import { FindAllPrinterSupplyTypesController } from "@useCase/printerSupplyType/findAll/findAllPrinterSupplyTypesController";
import { MongoDBPrinterSupplyTypeRepository } from "@repository/printerSupplyType/implementation/MongoDBPrinterSupplyTypeRepository";
// import { inMemoryPrinterSupplyTypeRepository } from "@repository/printerSupplyType/implementation/InMemoryPrinterSupplyTypeRepository";

const mongoDBPrinterSupplyTypeRepository = new MongoDBPrinterSupplyTypeRepository();

// const findAllPrinterSupplyTypesUseCase = new FindAllPrinterSupplyTypesUseCase(inMemoryPrinterSupplyTypeRepository);
const findAllPrinterSupplyTypesUseCase = new FindAllPrinterSupplyTypesUseCase(mongoDBPrinterSupplyTypeRepository);

const findAllPrinterSupplyTypesController = new FindAllPrinterSupplyTypesController(findAllPrinterSupplyTypesUseCase);

export {
    findAllPrinterSupplyTypesUseCase, findAllPrinterSupplyTypesController
};
