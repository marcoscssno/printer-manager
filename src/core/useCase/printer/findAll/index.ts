import { inMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";
import { FindAllPrintersController } from "@useCase/printer/findAll/findAllPrintersController";
import { FindAllPrintersUseCase } from "@useCase/printer/findAll/findAllPrintersUseCase";

const findAllPrintersUseCase = new FindAllPrintersUseCase(inMemoryPrinterRepository);

const findAllPrintersController = new FindAllPrintersController(findAllPrintersUseCase);

export {
    findAllPrintersController, findAllPrintersUseCase
};
