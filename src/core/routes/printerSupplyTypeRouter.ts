import { Router } from "express";
import { createPrinterSupplyTypeController } from "@useCase/printerSupplyType/create";
import { deletePrinterSupplyTypeController } from "@useCase/printerSupplyType/delete";
import { findPrinterSupplyTypeByIdController } from "@useCase/printerSupplyType/findById";
import { updatePrinterSupplyTypeController } from "@useCase/printerSupplyType/update";
import { findAllPrinterSupplyTypesController } from "@useCase/printerSupplyType/findAll";

const printerSupplyTypeRouter = Router()

printerSupplyTypeRouter.post('/printerSupplyType', (request, response) => {
    return createPrinterSupplyTypeController.handle(request, response);
});

printerSupplyTypeRouter.get('/printerSupplyType', (request, response) => {
    return findAllPrinterSupplyTypesController.handle(request, response);
});

printerSupplyTypeRouter.delete('/printerSupplyType/:id', (request, response) => {
    return deletePrinterSupplyTypeController.handle(request, response);
});

printerSupplyTypeRouter.get('/printerSupplyType/:id', (request, response) => {
    return findPrinterSupplyTypeByIdController.handle(request, response);
});

printerSupplyTypeRouter.put('/printerSupplyType/:id', (request, response) => {
    return updatePrinterSupplyTypeController.handle(request, response);
});

export {
    printerSupplyTypeRouter
};
