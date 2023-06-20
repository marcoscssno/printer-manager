import { Printer } from "@entity/printer/Printer";
import { InMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";
import { fakePrinter } from "@shared/fake/fakePrinter";
import { Printer } from "@entity/printer/Printer";
import { inMemoryState } from "@utils/InMemoryState";

const inMemoryPrinterRepository = new InMemoryPrinterRepository(inMemoryState);

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
