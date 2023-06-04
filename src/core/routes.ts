import { Router } from "express";
import { createPrinterController } from "@useCase/printer/create";
import { findAllPrintersController } from "@useCase/printer/findAll";

const router = Router()

router.post('/printer', (request, response) => {
    return createPrinterController.handle(request, response);
});

router.get('/printer', (request, response) => {
    return findAllPrintersController.handle(request, response);
});


export {
    router
}
