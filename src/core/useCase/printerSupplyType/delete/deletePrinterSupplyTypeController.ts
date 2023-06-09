import { Request, Response } from 'express';
import { DeletePrinterSupplyTypeUseCase } from "@useCase/printerSupplyType/delete/deletePrinterSupplyTypeUseCase";

class DeletePrinterSupplyTypeController {
    constructor(
        private deletePrinterSupplyTypeUseCase: DeletePrinterSupplyTypeUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            await this.deletePrinterSupplyTypeUseCase.execute(id);

            return response.status(200).send();
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error'
            });
        }
    }
}

export {
    DeletePrinterSupplyTypeController
};
