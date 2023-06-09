import { DeletePrinterSupplyTypeUseCase } from "@useCase/printerSupplyType/delete/deletePrinterSupplyTypeUseCase";
import { DeletePrinterSupplyTypeController } from "@useCase/printerSupplyType/delete/deletePrinterSupplyTypeController";
import { inMemoryPrinterSupplyTypeRepository } from "@repository/printerSupplyType/implementation/InMemoryPrinterSupplyTypeRepository";

const deletePrinterSupplyTypeUseCase = new DeletePrinterSupplyTypeUseCase(inMemoryPrinterSupplyTypeRepository);

const deletePrinterSupplyTypeController = new DeletePrinterSupplyTypeController(deletePrinterSupplyTypeUseCase);

export {
    deletePrinterSupplyTypeUseCase, deletePrinterSupplyTypeController
};