import { FindPrinterByIdUseCase } from "@useCase/printer/findById/findPrinterByIdUseCase";
import { FindPrinterByIdController } from "@useCase/printer/findById/findPrinterByIdController";
import { MongoDBPrinterRepository } from "@repository/printer/implementation/MongoDBPrinterRepository";
// import { inMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";

const mongoDBPrinterRepository = new MongoDBPrinterRepository();

// const findPrinterByIdUseCase = new FindPrinterByIdUseCase(inMemoryPrinterRepository);
const findPrinterByIdUseCase = new FindPrinterByIdUseCase(mongoDBPrinterRepository);

const findPrinterByIdController = new FindPrinterByIdController(findPrinterByIdUseCase);

export {
    findPrinterByIdUseCase,
    findPrinterByIdController
}