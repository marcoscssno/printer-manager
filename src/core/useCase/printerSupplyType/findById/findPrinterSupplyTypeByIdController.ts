import { Request, Response } from 'express';
import { FindPrinterSupplyTypeByIdUseCase } from "./findPrinterSupplyTypeByIdUseCase";

class FindPrinterSupplyTypeByIdController {
    constructor(
        private findPrinterSupplyTypeByIdUseCase: FindPrinterSupplyTypeByIdUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const printerSupplyType = await this.findPrinterSupplyTypeByIdUseCase.execute(id);
            return response.status(200).json(printerSupplyType);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error'
            });
        }
    }
}

export {
    FindPrinterSupplyTypeByIdController
};
