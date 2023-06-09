import { inMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";
import { UpdatePrinterController } from "@useCase/printer/update/updatePrinterController";
import { UpdatePrinterUseCase } from "@useCase/printer/update/updatePrinterUseCase";

const updatePrinterUseCase = new UpdatePrinterUseCase(inMemoryPrinterRepository);

const updatePrinterController = new UpdatePrinterController(updatePrinterUseCase);

export {
    updatePrinterController, updatePrinterUseCase
};
