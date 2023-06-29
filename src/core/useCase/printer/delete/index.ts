import { DeletePrinterUseCase } from "@useCase/printer/delete/deletePrinterUseCase";
import { DeletePrinterController } from "@useCase/printer/delete/deletePrinterController";
import { MongoDBPrinterRepository } from "@repository/printer/implementation/MongoDBPrinterRepository";
// import { inMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";

const mongoDBPrinterRepository = new MongoDBPrinterRepository();

// const deletePrinterUseCase = new DeletePrinterUseCase(inMemoryPrinterRepository);
const deletePrinterUseCase = new DeletePrinterUseCase(mongoDBPrinterRepository);

const deletePrinterController = new DeletePrinterController(deletePrinterUseCase);

export {
    deletePrinterUseCase,
    deletePrinterController
}