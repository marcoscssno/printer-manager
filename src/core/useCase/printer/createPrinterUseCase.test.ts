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
        const data = fakePrinter();
        const allPrinters = await inMemoryPrinterRepository.findAll();
        // Act
        await sut.execute(data);
        const printerFromRepository = allPrinters[0];
        // Assert
        expect(printerFromRepository).toMatchObject(data);
    });

    it('should not create a printer when there is one with same serial number', async () => {
        // Arrange
        const sut = makeSut();
        const firstPrinterData = fakePrinter();
        const secondPrinterData = fakePrinter();
        const allPrinters = await inMemoryPrinterRepository.findAll();
        // Act
        await sut.execute(firstPrinterData);
        // Assert
        expect(async () => sut.execute(secondPrinterData)).rejects.toThrowError();
    });
});
