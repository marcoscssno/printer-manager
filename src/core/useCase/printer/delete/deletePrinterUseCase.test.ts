import { fakePrinter } from "@shared/fake/fakePrinter";
import { DeletePrinterUseCase } from "./deletePrinterUseCase";
import { inMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";
import { Printer } from "@entity/printer/Printer";

const makeSut = () => {
    const sut = new DeletePrinterUseCase(inMemoryPrinterRepository);
    return sut;
};


describe('Delete Printer Use Case', () => {
    it('should throw error if printer is not found', async () => {
        const sut = makeSut();
        const id = 'someId';
        
        expect(async () => await sut.execute(id)).rejects.toThrow();
    });
});