import { inMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";
import { CreatePrinterController } from "@useCase/printer/create/createPrinterController";
import { CreatePrinterUseCase } from "@useCase/printer/create/createPrinterUseCase";

const createPrinterUseCase = new CreatePrinterUseCase(inMemoryPrinterRepository);

const createPrinterController = new CreatePrinterController(createPrinterUseCase);

export {
    createPrinterController, createPrinterUseCase
};
