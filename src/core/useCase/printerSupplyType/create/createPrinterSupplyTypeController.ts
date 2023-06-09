import { Request, Response } from 'express';
import { CreatePrinterSupplyTypeUseCase } from "@useCase/printerSupplyType/create/createPrinterSupplyTypeUseCase";

class CreatePrinterSupplyTypeController {
    constructor(
        private createPrinterSupplyTypeUseCase: CreatePrinterSupplyTypeUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        try {
            await this.createPrinterSupplyTypeUseCase.execute({
                name
            })

            return response.status(201).send();
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error'
            });
        }
    }
}

export {
    CreatePrinterSupplyTypeController
};
