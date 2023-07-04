import { DeletePrinterSupplyTypeUseCase } from "@useCase/printerSupplyType/delete/deletePrinterSupplyTypeUseCase";
import { inMemoryPrinterSupplyTypeRepository } from "@repository/printerSupplyType/implementation/InMemoryPrinterSupplyTypeRepository";
import { PrinterSupplyType } from "@entity/printerSupplyType/PrinterSupplyType";
import { fakeMetaData } from "@shared/fake/fakeMetaData";
import { fakePrinterSupplyType } from "@shared/fake/fakePrinterSupplyType";

const makeSut = () => {
    const sut = new DeletePrinterSupplyTypeUseCase(inMemoryPrinterSupplyTypeRepository);
    return sut;
};


describe('Delete Printer Supply Type Use Case', () => {
    it('should throw error if printer supply type is not found', async () => {
        const sut = makeSut();
        const id = 'someId';
        
        expect(async () => await sut.execute(id)).rejects.toThrow();
    });
    it('should delete a printer supply type', async () => {
        const sut = makeSut();

        const metaData = fakeMetaData();
        const printerSupplyTypeData = { ...fakePrinterSupplyType(), ...metaData };
        const printerSupplyType = new PrinterSupplyType(printerSupplyTypeData);
        const id = printerSupplyType.getId();
        await inMemoryPrinterSupplyTypeRepository.save(printerSupplyType.getProps());
        const allPrinters = await inMemoryPrinterSupplyTypeRepository.findAll();

        await sut.execute(id);

        expect(allPrinters[0].isDeleted).toBeTruthy();
    });
});
