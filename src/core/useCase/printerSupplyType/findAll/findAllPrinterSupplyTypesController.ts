import { Request, Response } from 'express';
import { FindAllPrinterSupplyTypesUseCase } from "@useCase/printerSupplyType/findAll/findAllPrinterSupplyTypesUseCase";

export class FindAllPrinterSupplyTypesController {
    constructor(
        private findAllPrinterSupplyTypesUseCase: FindAllPrinterSupplyTypesUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const printerSupplyTypes = await this.findAllPrinterSupplyTypesUseCase.execute();
            return response.status(200).json(printerSupplyTypes);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error'
            });
        }
    }
}
