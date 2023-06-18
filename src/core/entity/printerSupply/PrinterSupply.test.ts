import { fakeMetaData } from "@shared/fake/fakeMetaData";
import { fakePrinterSupply } from "@shared/fake/fakePrinterSupply";
import { PrinterSupply } from "@entity/printerSupply/PrinterSupply";
import { PrinterSupplyProps } from "@entity/printerSupply/PrinterSupplyProps";

describe('Printer Supply Entity', () => {
    it('should instantiate a printer supply entity', () => {
        const metaData = fakeMetaData();
        const data = {
            ...metaData,
            ...fakePrinterSupply()
        }
        
        const newPrinterSupply = new PrinterSupply(data);
        
        expect(newPrinterSupply).toBeInstanceOf(PrinterSupply);
    });
    it('should validate props on constructor', () => {
        const metaData = fakeMetaData();
        // @ts-expect-error
        const data: Omit<PrinterSupplyProps, 'id'> = {
            ...metaData,
            name: undefined
        }
                
        expect(() => new PrinterSupply(data)).toThrow();
    });
    it('should assign new id when no id is specified', () => {
        const metaData = fakeMetaData();
        const data: Omit<PrinterSupplyProps, 'id'> = {
            ...metaData,
            ...fakePrinterSupply()
        }
        
        const newPrinterSupply = new PrinterSupply(data);
        
        expect(newPrinterSupply.getId()).toBeDefined();
    });
    it('should assign given id', () => {
        const metaData = fakeMetaData();
        const data = {
            ...metaData,
            ...fakePrinterSupply()
        }
        const customId = 'f8211523-14a1-4a0b-b263-c6d0eec01c51';
        
        const newPrinterSupply = new PrinterSupply(data, customId);
        
        expect(newPrinterSupply.getId()).toBe(customId);
    });
    it('should validate on setter methods', () => {
        const metaData = fakeMetaData();
        const data = {
            ...metaData,
            ...fakePrinterSupply()
        }
        
        const newPrinterSupply = new PrinterSupply(data);
        // @ts-expect-error
        const setPrinterSupplyTypeId = () => newPrinterSupply.setPrinterSupplyTypeId(false);
        // @ts-expect-error
        const setName = () => newPrinterSupply.setName(false);
        // @ts-expect-error
        const setLevel = () => newPrinterSupply.setLevel(false);
        // @ts-expect-error
        const setLastUpdatedAt = () => newPrinterSupply.setLastUpdatedAt('someString');
        // @ts-expect-error
        const setLastUpdatedBy = () => newPrinterSupply.setLastUpdatedBy(false);
        // @ts-expect-error
        const setIsDeleted = () => newPrinterSupply.setIsDeleted('someString');
        // @ts-expect-error
        const setDeletedAt = () => newPrinterSupply.setDeletedAt(true);
        
        expect(setPrinterSupplyTypeId).toThrow('ValidationError');
        expect(setName).toThrow('ValidationError');
        expect(setLevel).toThrow('ValidationError');
        // expect(setLastUpdatedAt).toThrow('ValidationError');
        expect(setLastUpdatedBy).toThrow('ValidationError');
        expect(setIsDeleted).toThrow('ValidationError');
        // expect(setDeletedAt).toThrow('ValidationError');
    });
});
