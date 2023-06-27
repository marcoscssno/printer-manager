import { CreatePrinterUseCase } from "./createPrinterUseCase";
import { CreatePrinterController } from "./createPrinterController";
// import { inMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";
import { MongoDBPrinterRepository } from "@repository/printer/implementation/MongoDBPrinterRepository";

const mongoDBPrinterRepository = new MongoDBPrinterRepository();

const createPrinterUseCase = new CreatePrinterUseCase(mongoDBPrinterRepository);

const createPrinterController = new CreatePrinterController(createPrinterUseCase);

export {
    createPrinterUseCase,
    createPrinterController
}