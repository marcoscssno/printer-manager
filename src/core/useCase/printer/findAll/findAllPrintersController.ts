import { Request, Response } from 'express';
import { FindAllPrintersUseCase } from "@useCase/printer/findAll/findAllPrintersUseCase";

export class FindAllPrintersController {
    constructor(
        private findAllPrintersUseCase: FindAllPrintersUseCase
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const printers = await this.findAllPrintersUseCase.execute();
            return response.status(200).json(printers);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error'
            });
        }
    }
}
