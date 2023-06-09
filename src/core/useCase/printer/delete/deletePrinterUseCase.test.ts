import { Printer } from "@entity/printer/Printer";
import { inMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";
import { fakePrinter } from "@shared/fake/fakePrinter";
import { DeletePrinterUseCase } from "@useCase/printer/delete/deletePrinterUseCase";

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
    it('should delete a printer', async () => {
        const sut = makeSut();

        const metaData = {
            createdAt: new Date(),
            createdBy: 'user',
            isDeleted: false
        }
        const printerData = { ...fakePrinter(), ...metaData };
        const printer = new Printer(printerData);
        const id = printer.getId();
        await inMemoryPrinterRepository.save(printer.getProps());
        const allPrinters = await inMemoryPrinterRepository.findAll();

        await sut.execute(id);

        expect(allPrinters[0].isDeleted).toBeTruthy();
        console.log(allPrinters[0]);
    });
});
