import { Request, Response } from 'express';
import { FindPrinterByIdUseCase } from "@useCase/printer/findById/findPrinterByIdUseCase";

class FindPrinterByIdController {
    constructor(
        private findPrinterByIdUseCase: FindPrinterByIdUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const printer = await this.findPrinterByIdUseCase.execute(id);
            return response.status(200).json(printer);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error'
            });
        }
    }
}

export {
    FindPrinterByIdController
};
