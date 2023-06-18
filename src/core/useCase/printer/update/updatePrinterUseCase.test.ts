import { InMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";
import { UpdatePrinterUseCase } from "@useCase/printer/update/updatePrinterUseCase";
import { fakePrinter } from "@shared/fake/fakePrinter";
import { Printer } from "@entity/printer/Printer";
import { inMemoryState } from "@utils/InMemoryState";

const inMemoryPrinterRepository = new InMemoryPrinterRepository(inMemoryState);

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
    it('should update a printer', async () => {
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
        const newIpAddress = '192.168.14.20';
        const printerFromRepository = await inMemoryPrinterRepository.findById(id);

        await sut.execute(id, { ipAddress: newIpAddress, manufacturer: printer.getManufacturer() });
        
        expect(printerFromRepository?.ipAddress).toBe(newIpAddress);
    });
});
