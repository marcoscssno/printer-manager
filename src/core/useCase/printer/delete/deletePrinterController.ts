import { DeletePrinterUseCase } from "@useCase/printer/delete/deletePrinterUseCase";
import { Request, Response } from 'express';

class DeletePrinterController {
    constructor(
        private deletePrinterUseCase: DeletePrinterUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            await this.deletePrinterUseCase.execute(id);

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
    DeletePrinterController
};
