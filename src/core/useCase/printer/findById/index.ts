import { FindPrinterByIdUseCase } from "@useCase/printer/findById/findPrinterByIdUseCase";
import { FindPrinterByIdController } from "@useCase/printer/findById/findPrinterByIdController";
import { inMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";

const findPrinterByIdUseCase = new FindPrinterByIdUseCase(inMemoryPrinterRepository);

const findPrinterByIdController = new FindPrinterByIdController(findPrinterByIdUseCase);

export {
    findPrinterByIdUseCase,
    findPrinterByIdController
}