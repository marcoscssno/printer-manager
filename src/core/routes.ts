import { Router } from "express";

const router = Router()

router.get('/printers', (request, response) => {
    return response.send('Hello, World!');
});


export {
    router
}
