import { PrinterSupplyType } from "@entity/printerSupplyType/PrinterSupplyType";
import { InMemoryPrinterSupplyTypeRepository } from "@repository/printerSupplyType/implementation/InMemoryPrinterSupplyTypeRepository";
import { fakePrinterSupplyType } from "@shared/fake/fakePrinterSupplyType";
import { FindAllPrinterSupplyTypesUseCase } from "./findAllPrinterSupplyTypesUseCase";
import { fakeMetaData } from "@shared/fake/fakeMetaData";

const inMemoryPrinterSupplyTypeRepository = new InMemoryPrinterSupplyTypeRepository();

const makeSut = () => {
    const sut = new FindAllPrinterSupplyTypesUseCase(inMemoryPrinterSupplyTypeRepository);
    return sut;
};

describe('Find All Printer Supply Types Use Case', () => {
    it('should return all printer Supply Types in repository', async () => {
        const sut = makeSut();
        const metaData = fakeMetaData();
        const firstPrinterSupplyTypeData = { ...fakePrinterSupplyType(), ...metaData };
        const firstPrinterSupplyType = new PrinterSupplyType(firstPrinterSupplyTypeData);
        const secondPrinterSupplyTypeData = { ...fakePrinterSupplyType(), ...metaData };
        const secondPrinterSupplyType = new PrinterSupplyType(secondPrinterSupplyTypeData);

        await inMemoryPrinterSupplyTypeRepository.save(firstPrinterSupplyType.getProps());
        await inMemoryPrinterSupplyTypeRepository.save(secondPrinterSupplyType.getProps());
        const allPrinterSupplyTypes = await sut.execute();

        expect(allPrinterSupplyTypes[0]).toBe(firstPrinterSupplyType.getProps());
        expect(allPrinterSupplyTypes[1]).toBe(secondPrinterSupplyType.getProps());
    });
});
