import { DeletePrinterUseCase } from "@useCase/printer/delete/deletePrinterUseCase";
import { DeletePrinterController } from "@useCase/printer/delete/deletePrinterController";
import { inMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";

const deletePrinterUseCase = new DeletePrinterUseCase(inMemoryPrinterRepository);

const deletePrinterController = new DeletePrinterController(deletePrinterUseCase);

export {
    deletePrinterUseCase,
    deletePrinterController
}