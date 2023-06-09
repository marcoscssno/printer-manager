import { UpdatePrinterSupplyTypeUseCase } from "@useCase/printerSupplyType/update/updatePrinterSupplyTypeUseCase";
import { UpdatePrinterSupplyTypeController } from "@useCase/printerSupplyType/update/updatePrinterSupplyTypeController";
import { inMemoryPrinterSupplyTypeRepository } from "@repository/printerSupplyType/implementation/InMemoryPrinterSupplyTypeRepository";

const updatePrinterSupplyTypeUseCase = new UpdatePrinterSupplyTypeUseCase(inMemoryPrinterSupplyTypeRepository);

const updatePrinterSupplyTypeController = new UpdatePrinterSupplyTypeController(updatePrinterSupplyTypeUseCase);

export {
    updatePrinterSupplyTypeUseCase,
    updatePrinterSupplyTypeController
}