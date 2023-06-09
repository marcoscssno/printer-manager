import { CreatePrinterUseCase } from "@useCase/printer/create/createPrinterUseCase";
import { Request, Response } from 'express';

class CreatePrinterController {
    constructor(
        private createPrinterUseCase: CreatePrinterUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { ipAddress, manufacturer, model, serialNumber, propertyNumber } = request.body;

        try {
            await this.createPrinterUseCase.execute({
                ipAddress,
                manufacturer,
                model,
                serialNumber,
                propertyNumber
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
    CreatePrinterController
};
