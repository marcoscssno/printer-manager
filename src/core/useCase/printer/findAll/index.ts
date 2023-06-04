import { FindAllPrintersUseCase } from "@useCase/printer/findAll/findAllPrintersUseCase";
import { FindAllPrintersController } from "@useCase/printer/findAll/findAllPrintersController";
import { inMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";

const findAllPrintersUseCase = new FindAllPrintersUseCase(inMemoryPrinterRepository);

const findAllPrintersController = new FindAllPrintersController(findAllPrintersUseCase);

export {
    findAllPrintersUseCase,
    findAllPrintersController
}