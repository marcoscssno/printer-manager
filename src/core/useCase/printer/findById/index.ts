import { inMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";
import { FindPrinterByIdController } from "@useCase/printer/findById/findPrinterByIdController";
import { FindPrinterByIdUseCase } from "@useCase/printer/findById/findPrinterByIdUseCase";

const findPrinterByIdUseCase = new FindPrinterByIdUseCase(inMemoryPrinterRepository);

const findPrinterByIdController = new FindPrinterByIdController(findPrinterByIdUseCase);

export {
    findPrinterByIdController, findPrinterByIdUseCase
};
