import { PrinterSupplyType } from "@entity/printerSupplyType/PrinterSupplyType";
import { InMemoryPrinterSupplyTypeRepository } from "@repository/printerSupplyType/implementation/InMemoryPrinterSupplyTypeRepository";
import { fakeMetaData } from "@shared/fake/fakeMetaData";
import { fakePrinterSupplyType } from "@shared/fake/fakePrinterSupplyType";
import { FindPrinterSupplyTypeByIdUseCase } from "./findPrinterSupplyTypeByIdUseCase";
import { inMemoryState } from "@utils/InMemoryState";

const inMemoryPrinterSupplyTypeRepository = new InMemoryPrinterSupplyTypeRepository(inMemoryState);

const makeSut = () => {
    const sut = new FindPrinterSupplyTypeByIdUseCase(inMemoryPrinterSupplyTypeRepository);
    return sut;
};

describe('Find Printer Supply Type By Id Use Case', () => {
    it('should find printer supply type by id', async () => {
        const sut = makeSut();
        const metaData = fakeMetaData();
        const printerSupplyTypeData = { ...fakePrinterSupplyType(), ...metaData };
        const printerSupplyType = new PrinterSupplyType(printerSupplyTypeData);
        const id = printerSupplyType.getId();
        const newPrinterSupplyType = printerSupplyType.getProps();

        await inMemoryPrinterSupplyTypeRepository.save(printerSupplyType.getProps());
        const printerSupplyTypeFromRepository = await sut.execute(id);

        expect(printerSupplyTypeFromRepository).toBe(newPrinterSupplyType);
    });
});
