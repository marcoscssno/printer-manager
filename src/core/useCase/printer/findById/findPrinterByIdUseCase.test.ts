import { InMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";
import { FindPrinterByIdUseCase } from "./findPrinterByIdUseCase";
import { fakePrinter } from "@shared/fake/fakePrinter";
import { Printer } from "@entity/printer/Printer";

const inMemoryPrinterRepository = new InMemoryPrinterRepository();

const makeSut = () => {
    const sut = new FindPrinterByIdUseCase(inMemoryPrinterRepository);
    return sut;
};

describe('Find Printer By Id Use Case', () => {
    it('should find printer by id', async () => {
        const sut = makeSut();
        const metaData = {
            createdAt: new Date(),
            createdBy: 'user',
            isDeleted: false
        }
        const printerData = { ...fakePrinter(), ...metaData };
        const printer = new Printer(printerData);
        const id = printer.getId();
        const newPrinter = printer.getProps();
        
        await inMemoryPrinterRepository.save(printer.getProps());
        const printerFromRepository = await sut.execute(id);
        
        expect(printerFromRepository).toBe(newPrinter);
    });
});
