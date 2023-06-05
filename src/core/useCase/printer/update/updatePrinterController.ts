import { Request, Response } from 'express';
import { UpdatePrinterUseCase } from "@useCase/printer/update/updatePrinterUseCase";

export class UpdatePrinterController {
    constructor(
        private updatePrinterUseCase: UpdatePrinterUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { ipAddress, manufacturer, model, serialNumber, propertyNumber } = request.body;

        try {
            await this.updatePrinterUseCase.execute(
                id, {
                ipAddress,
                manufacturer,
                model,
                serialNumber,
                propertyNumber
            });

            return response.status(201).send();
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error'
            });
        }
    }
}
