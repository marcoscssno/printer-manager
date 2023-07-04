import { CreatePrinterSupplyTypeUseCase } from "@useCase/printerSupplyType/create/createPrinterSupplyTypeUseCase";
import { CreatePrinterSupplyTypeController } from "@useCase/printerSupplyType/create/createPrinterSupplyTypeController";
// import { inMemoryPrinterSupplyTypeRepository } from "@repository/printerSupplyType/implementation/InMemoryPrinterSupplyTypeRepository";
import { MongoDBPrinterSupplyTypeRepository } from "@repository/printerSupplyType/implementation/MongoDBPrinterSupplyTypeRepository";

const mongoDBPrinterSupplyTypeRepository = new MongoDBPrinterSupplyTypeRepository();

// const createPrinterSupplyTypeUseCase = new CreatePrinterSupplyTypeUseCase(inMemoryPrinterSupplyTypeRepository);
const createPrinterSupplyTypeUseCase = new CreatePrinterSupplyTypeUseCase(mongoDBPrinterSupplyTypeRepository);

const createPrinterSupplyTypeController = new CreatePrinterSupplyTypeController(createPrinterSupplyTypeUseCase);

export {
    createPrinterSupplyTypeUseCase,
    createPrinterSupplyTypeController
};
