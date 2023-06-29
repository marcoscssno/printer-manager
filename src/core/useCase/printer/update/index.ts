import { UpdatePrinterUseCase } from "@useCase/printer/update/updatePrinterUseCase";
import { UpdatePrinterController } from "@useCase/printer/update/updatePrinterController";
import { MongoDBPrinterRepository } from "@repository/printer/implementation/MongoDBPrinterRepository";
// import { inMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";

const mongoDBPrinterRepository = new MongoDBPrinterRepository();

// const updatePrinterUseCase = new UpdatePrinterUseCase(inMemoryPrinterRepository);
const updatePrinterUseCase = new UpdatePrinterUseCase(mongoDBPrinterRepository);

const updatePrinterController = new UpdatePrinterController(updatePrinterUseCase);

export {
    updatePrinterUseCase,
    updatePrinterController
}