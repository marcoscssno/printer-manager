import { UpdatePrinterSupplyTypeUseCase } from "@useCase/printerSupplyType/update/updatePrinterSupplyTypeUseCase";
import { UpdatePrinterSupplyTypeController } from "@useCase/printerSupplyType/update/updatePrinterSupplyTypeController";
// import { inMemoryPrinterSupplyTypeRepository } from "@repository/printerSupplyType/implementation/InMemoryPrinterSupplyTypeRepository";
import { MongoDBPrinterSupplyTypeRepository } from "@repository/printerSupplyType/implementation/MongoDBPrinterSupplyTypeRepository";

const mongoDBPrinterSupplyTypeRepository = new MongoDBPrinterSupplyTypeRepository();

// const updatePrinterSupplyTypeUseCase = new UpdatePrinterSupplyTypeUseCase(inMemoryPrinterSupplyTypeRepository);
const updatePrinterSupplyTypeUseCase = new UpdatePrinterSupplyTypeUseCase(mongoDBPrinterSupplyTypeRepository);

const updatePrinterSupplyTypeController = new UpdatePrinterSupplyTypeController(updatePrinterSupplyTypeUseCase);

export {
    updatePrinterSupplyTypeUseCase,
    updatePrinterSupplyTypeController
}