import { Router } from "express";
import { createPrinterController } from "@useCase/printer/create";
import { findAllPrintersController } from "@useCase/printer/findAll";
import { findPrinterByIdController } from "@useCase/printer/findById";
import { updatePrinterController } from "@useCase/printer/update";

const router = Router()

router.post('/printer', (request, response) => {
    return createPrinterController.handle(request, response);
});

router.get('/printer', (request, response) => {
    return findAllPrintersController.handle(request, response);
});

router.get('/printer/:id', (request, response) => {
    return findPrinterByIdController.handle(request, response);
});

router.put('/printer/:id', (request, response) => {
    return updatePrinterController.handle(request, response);
});

export {
    router
}
