import { InMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";
import { UpdatePrinterUseCase } from "@useCase/printer/update/updatePrinterUseCase";
import { fakePrinter } from "@shared/fake/fakePrinter";
import { Printer } from "@entity/printer/Printer";

const inMemoryPrinterRepository = new InMemoryPrinterRepository();

const makeSut = () => {
    const sut = new UpdatePrinterUseCase(inMemoryPrinterRepository);
    return sut;
};

describe('It should update a printer', () => {
    it('should throw error if printer is not found', async () => {
        const sut = makeSut();
        const id = 'someId';
        const metaData = {
            createdAt: new Date(),
            createdBy: 'user',
            isDeleted: false
        }
        const printerData = { ...fakePrinter(), ...metaData };
        const printer = new Printer(printerData);
        const printerProps = printer.getProps();
        const updatePrinter = async() => await sut.execute(id, printerProps);

        expect(updatePrinter).rejects.toThrow();
    });
});
