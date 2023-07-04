import { FindAllPrintersUseCase } from "@useCase/printer/findAll/findAllPrintersUseCase";
import { FindAllPrintersController } from "@useCase/printer/findAll/findAllPrintersController";
// import { inMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";
import { MongoDBPrinterRepository } from "@repository/printer/implementation/MongoDBPrinterRepository";

const mongoDBPrinterRepository = new MongoDBPrinterRepository();

// const findAllPrintersUseCase = new FindAllPrintersUseCase(inMemoryPrinterRepository);
const findAllPrintersUseCase = new FindAllPrintersUseCase(mongoDBPrinterRepository);

const findAllPrintersController = new FindAllPrintersController(findAllPrintersUseCase);

export {
    findAllPrintersUseCase,
    findAllPrintersController
}