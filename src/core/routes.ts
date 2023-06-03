import { Router } from "express";
import { createPrinterController } from "@useCase/printer/create";

const router = Router()

router.post('/printer', (request, response) => {
    return createPrinterController.handle(request, response);
});


export {
    router
}
