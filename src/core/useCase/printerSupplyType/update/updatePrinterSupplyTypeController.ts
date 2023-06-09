import { Request, Response } from 'express';
import { UpdatePrinterSupplyTypeUseCase } from "@useCase/printerSupplyType/update/updatePrinterSupplyTypeUseCase";

export class UpdatePrinterSupplyTypeController {
    constructor(
        private updatePrinterSupplyTypeUseCase: UpdatePrinterSupplyTypeUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name } = request.body;

        try {
            await this.updatePrinterSupplyTypeUseCase.execute(
                id, {
                name
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
