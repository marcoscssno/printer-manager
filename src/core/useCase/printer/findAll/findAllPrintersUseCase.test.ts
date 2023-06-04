import { Printer } from "@entity/printer/Printer";
import { InMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";
import { fakePrinter } from "@shared/fake/fakePrinter";
import { FindAllPrintersUseCase } from "./findAllPrintersUseCase";

const inMemoryPrinterRepository = new InMemoryPrinterRepository();

const makeSut = () => {
    const sut = new FindAllPrintersUseCase(inMemoryPrinterRepository);
    return sut;
};

describe('Find All Printers Use Case', () => {
    it('should return all printers in repository', async () => {
        const sut = makeSut();
        const metaData = {
            createdAt: new Date(),
            createdBy: 'user',
            isDeleted: false
        }
        const firstPrinterData = { ...fakePrinter(), ...metaData };
        const firstPrinter = new Printer(firstPrinterData);
        const secondPrinterData = { ...fakePrinter(), ...metaData };
        const secondPrinter = new Printer(secondPrinterData);
        
        await inMemoryPrinterRepository.save(firstPrinter.getProps());
        await inMemoryPrinterRepository.save(secondPrinter.getProps());
        const allPrinters = await sut.execute();
        
        expect(allPrinters[0]).toBe(firstPrinter);
        expect(allPrinters[1]).toBe(secondPrinter);
    });
});