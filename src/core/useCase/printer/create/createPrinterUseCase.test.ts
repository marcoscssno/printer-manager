import { InMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";
import { CreatePrinterUseCase } from "./createPrinterUseCase";
import { fakePrinter } from "@shared/fake/fakePrinter";
import { inMemoryState } from "@utils/InMemoryState";

const inMemoryPrinterRepository = new InMemoryPrinterRepository(inMemoryState);

const makeSut = () => {
    const sut = new CreatePrinterUseCase(inMemoryPrinterRepository);
    return sut;
};

describe('It should create a printer', () => {
    it('should create a printer', async () => {
        // Arrange
        const sut = makeSut();
        const data = fakePrinter();
        // Act
        await sut.execute(data);
        const allPrinters = await inMemoryPrinterRepository.findAll();
        const printer = allPrinters[0];
        const printerFromRepository = {
            ipAddress: printer.ipAddress,
            manufacturer: printer.manufacturer,
            model: printer.model,
            propertyNumber: printer.propertyNumber,
            serialNumber: printer.serialNumber
        }
        // Assert
        expect(printerFromRepository).toMatchObject(data);
    });

    it('should not create a printer when there is one with same serial number', async () => {
        // Arrange
        const sut = makeSut();
        const firstPrinterData = fakePrinter();
        firstPrinterData.serialNumber = 'ABC123DEF4';
        const secondPrinterData = fakePrinter();
        secondPrinterData.serialNumber = 'ABC123DEF4';
        const allPrinters = await inMemoryPrinterRepository.findAll();
        // Act
        await sut.execute(firstPrinterData);
        // Assert
        expect(async () => sut.execute(secondPrinterData)).rejects.toThrowError();
    });
});
