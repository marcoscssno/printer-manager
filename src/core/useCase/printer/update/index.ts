import { UpdatePrinterUseCase } from "@useCase/printer/update/updatePrinterUseCase";
import { UpdatePrinterController } from "@useCase/printer/update/updatePrinterController";
import { inMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";

const updatePrinterUseCase = new UpdatePrinterUseCase(inMemoryPrinterRepository);

const updatePrinterController = new UpdatePrinterController(updatePrinterUseCase);

export {
    updatePrinterUseCase,
    updatePrinterController
}