import { FindPrinterSupplyTypeByIdUseCase } from "@useCase/printerSupplyType/findById/findPrinterSupplyTypeByIdUseCase";
import { FindPrinterSupplyTypeByIdController } from "@useCase/printerSupplyType/findById/findPrinterSupplyTypeByIdController";
// import { inMemoryPrinterSupplyTypeRepository } from "@repository/printerSupplyType/implementation/InMemoryPrinterSupplyTypeRepository";
import { MongoDBPrinterSupplyTypeRepository } from "@repository/printerSupplyType/implementation/MongoDBPrinterSupplyTypeRepository";

const mongoDBPrinterSupplyTypeRepository = new MongoDBPrinterSupplyTypeRepository();

// const findPrinterSupplyTypeByIdUseCase = new FindPrinterSupplyTypeByIdUseCase(inMemoryPrinterSupplyTypeRepository);
const findPrinterSupplyTypeByIdUseCase = new FindPrinterSupplyTypeByIdUseCase(mongoDBPrinterSupplyTypeRepository);

const findPrinterSupplyTypeByIdController = new FindPrinterSupplyTypeByIdController(findPrinterSupplyTypeByIdUseCase);

export {
    findPrinterSupplyTypeByIdUseCase,
    findPrinterSupplyTypeByIdController
}