import { InMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";
import { CreatePrinterUseCase } from "./createPrinterUseCase";
import { fakePrinter } from "@shared/fake/fakePrinter";

const inMemoryPrinterRepository = new InMemoryPrinterRepository();

const makeSut = () => {
    const sut = new CreatePrinterUseCase(inMemoryPrinterRepository);
    return sut;
};

describe('It should create a printer', () => {
    it('should create a printer', async () => {
        // Arrange
        const sut = makeSut();
        const data = fakePrinter;
        const allPrinters = await inMemoryPrinterRepository.findAll();
        // Act
        await sut.execute(data);
        const printerFromRepository = allPrinters[0];
        // Assert
        expect(printerFromRepository).toMatchObject(fakePrinter);
    });
});
