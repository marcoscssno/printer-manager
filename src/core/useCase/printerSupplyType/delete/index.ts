import { DeletePrinterSupplyTypeUseCase } from "@useCase/printerSupplyType/delete/deletePrinterSupplyTypeUseCase";
import { DeletePrinterSupplyTypeController } from "@useCase/printerSupplyType/delete/deletePrinterSupplyTypeController";
import { MongoDBPrinterSupplyTypeRepository } from "@repository/printerSupplyType/implementation/MongoDBPrinterSupplyTypeRepository";
// import { inMemoryPrinterSupplyTypeRepository } from "@repository/printerSupplyType/implementation/InMemoryPrinterSupplyTypeRepository";

const mongoDBPrinterSupplyTypeRepository = new MongoDBPrinterSupplyTypeRepository();

// const deletePrinterSupplyTypeUseCase = new DeletePrinterSupplyTypeUseCase(inMemoryPrinterSupplyTypeRepository);
const deletePrinterSupplyTypeUseCase = new DeletePrinterSupplyTypeUseCase(mongoDBPrinterSupplyTypeRepository);

const deletePrinterSupplyTypeController = new DeletePrinterSupplyTypeController(deletePrinterSupplyTypeUseCase);

export {
    deletePrinterSupplyTypeUseCase, deletePrinterSupplyTypeController
};