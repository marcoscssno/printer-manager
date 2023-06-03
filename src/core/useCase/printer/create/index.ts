import { CreatePrinterUseCase } from "./createPrinterUseCase";
import { CreatePrinterController } from "./createPrinterController";
import { inMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";

const createPrinterUseCase = new CreatePrinterUseCase(inMemoryPrinterRepository);

const createPrinterController = new CreatePrinterController(createPrinterUseCase);

export {
    createPrinterUseCase,
    createPrinterController
}