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
        // Assert
        expect(allPrinters[0]).toHaveProperty('ipAddress', fakePrinter.ipAddress);
        expect(allPrinters[0]).toHaveProperty('manufacturer', fakePrinter.manufacturer);
        expect(allPrinters[0]).toHaveProperty('model', fakePrinter.model);
        expect(allPrinters[0]).toHaveProperty('serialNumber', fakePrinter.serialNumber);
        expect(allPrinters[0]).toHaveProperty('propertyNumber', fakePrinter.propertyNumber);
        expect(allPrinters[0]).toHaveProperty('supply', fakePrinter.supply);
    });
});