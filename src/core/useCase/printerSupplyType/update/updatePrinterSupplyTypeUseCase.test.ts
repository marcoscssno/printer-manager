import { InMemoryPrinterSupplyTypeRepository } from "@repository/printerSupplyType/implementation/InMemoryPrinterSupplyTypeRepository";
import { UpdatePrinterSupplyTypeUseCase } from "@useCase/printerSupplyType/update/updatePrinterSupplyTypeUseCase";
import { fakePrinterSupplyType } from "@shared/fake/fakePrinterSupplyType";
import { PrinterSupplyType } from "@entity/printerSupplyType/PrinterSupplyType";
import { fakeMetaData } from "@shared/fake/fakeMetaData";
import { inMemoryState } from "@utils/InMemoryState";

const inMemoryPrinterSupplyTypeRepository = new InMemoryPrinterSupplyTypeRepository(inMemoryState);

const makeSut = () => {
    const sut = new UpdatePrinterSupplyTypeUseCase(inMemoryPrinterSupplyTypeRepository);
    return sut;
};

describe('It should update a printer supply type', () => {
    it('should throw error if printer supply type is not found', async () => {
        const sut = makeSut();
        const id = 'someId';
        const metaData = fakeMetaData();
        const printerSupplyTypeData = { ...fakePrinterSupplyType(), ...metaData };
        const printerSupplyType = new PrinterSupplyType(printerSupplyTypeData);
        const printerSupplyTypeProps = printerSupplyType.getProps();
        const updatePrinterSupplyType = async() => await sut.execute(id, printerSupplyTypeProps);

        expect(updatePrinterSupplyType).rejects.toThrow();
    });
    it('should update a printer supply type', async () => {
        const sut = makeSut();
        const metaData = fakeMetaData();
        const printerSupplyTypeData = { ...fakePrinterSupplyType(), ...metaData };
        const printerSupplyType = new PrinterSupplyType(printerSupplyTypeData);
        const id = printerSupplyType.getId();
        await inMemoryPrinterSupplyTypeRepository.save(printerSupplyType.getProps());
        const newName = 'Fuser';
        const printerSupplyTypeFromRepository = await inMemoryPrinterSupplyTypeRepository.findById(id);

        await sut.execute(id, { name: newName });
        
        expect(printerSupplyTypeFromRepository?.name).toBe(newName);
    });
});
