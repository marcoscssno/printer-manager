import { InMemoryPrinterSupplyTypeRepository } from "@repository/printerSupplyType/implementation/InMemoryPrinterSupplyTypeRepository";
import { CreatePrinterSupplyTypeUseCase } from "@useCase/printerSupplyType/create/createPrinterSupplyTypeUseCase";
import { fakePrinterSupplyType } from "@shared/fake/fakePrinterSupplyType";

const inMemoryPrinterRepository = new InMemoryPrinterSupplyTypeRepository();

const makeSut = () => {
    const sut = new CreatePrinterSupplyTypeUseCase(inMemoryPrinterRepository);
    return sut;
};

describe('It should create a printer supply type', () => {
    it('should create a printer supply type', async () => {
        const sut = makeSut();
        const data = fakePrinterSupplyType();
        
        await sut.execute(data);
        const allPrinterSupplyTypes = await inMemoryPrinterRepository.findAll();
        const printerSupplyType = allPrinterSupplyTypes[0];
        const printerSupplyTypeFromRepository = {
            name: printerSupplyType.name
        }
        
        expect(printerSupplyTypeFromRepository).toMatchObject(data);
    });

    it('should not create a printer supply type when there is one with same name', async () => {
        const sut = makeSut();
        const firstPrinterSupplyTypeData = fakePrinterSupplyType();
        firstPrinterSupplyTypeData.name = 'Imaging Unit';
        const secondPrinterSupplyTypeData = fakePrinterSupplyType();
        secondPrinterSupplyTypeData.name = 'Imaging Unit';
        
        await sut.execute(firstPrinterSupplyTypeData);
        
        expect(async () => await sut.execute(secondPrinterSupplyTypeData)).rejects.toThrow();
    });
});
