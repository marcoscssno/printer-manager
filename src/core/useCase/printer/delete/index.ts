import { inMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";
import { DeletePrinterController } from "@useCase/printer/delete/deletePrinterController";
import { DeletePrinterUseCase } from "@useCase/printer/delete/deletePrinterUseCase";

const deletePrinterUseCase = new DeletePrinterUseCase(inMemoryPrinterRepository);

const deletePrinterController = new DeletePrinterController(deletePrinterUseCase);

export {
    deletePrinterController, deletePrinterUseCase
};
