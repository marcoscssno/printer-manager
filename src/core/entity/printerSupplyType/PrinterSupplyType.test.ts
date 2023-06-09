import { fakeMetaData } from "@shared/fake/fakeMetaData";
import { fakePrinterSupplyType } from "@shared/fake/fakePrinterSupplyType";
import { PrinterSupplyType } from "@entity/printerSupplyType/PrinterSupplyType";
import { PrinterSupplyTypeProps } from "@entity/printerSupplyType/PrinterSupplyTypeProps";

describe('Printer Supply Type Entity', () => {
    it('should instantiate a printer supply type entity', () => {
        const metaData = fakeMetaData();
        const data = {
            ...metaData,
            ...fakePrinterSupplyType()
        }
        
        const newPrinterSupplyType = new PrinterSupplyType(data);
        
        expect(newPrinterSupplyType).toBeInstanceOf(PrinterSupplyType);
    });
    it('should validate props on constructor', () => {
        const metaData = fakeMetaData();
        const data: Omit<PrinterSupplyTypeProps, 'id'> = {
            ...metaData,
            // @ts-expect-error
            name: undefined
        }
                
        expect(() => new PrinterSupplyType(data)).toThrow();
    });
    it('should require a name', () => {
        const metaData = fakeMetaData();
        // @ts-expect-error
        const data: Omit<PrinterSupplyTypeProps, 'id'> = {
            ...metaData
        }
        

        
        expect(() => new PrinterSupplyType(data)).toThrow('name');
    });
    it('should assign new id when no id is specified', () => {
        const metaData = fakeMetaData();
        const data: Omit<PrinterSupplyTypeProps, 'id'> = {
            ...metaData,
            ...fakePrinterSupplyType()
        }
        
        const newPrinterSupplyType = new PrinterSupplyType(data);
        
        expect(newPrinterSupplyType.getId()).toBeDefined();
    });
    it('should assign given id', () => {
        const metaData = fakeMetaData();
        const data = {
            ...metaData,
            ...fakePrinterSupplyType()
        }
        const customId = 'f8211523-14a1-4a0b-b263-c6d0eec01c51';
        
        const newPrinterSupplyType = new PrinterSupplyType(data, customId);
        
        expect(newPrinterSupplyType.getId()).toBe(customId);
    });
    it('should validate on setter methods', () => {
        const metaData = fakeMetaData();
        const data = {
            ...metaData,
            ...fakePrinterSupplyType()
        }
        
        const newPrinterSupplyType = new PrinterSupplyType(data);
        // @ts-expect-error
        const setName = () => newPrinterSupplyType.setName(false);
        // @ts-expect-error
        const setLastUpdatedAt = () => newPrinterSupplyType.setLastUpdatedAt('someString');
        // @ts-expect-error
        const setLastUpdatedBy = () => newPrinterSupplyType.setLastUpdatedBy(false);
        // @ts-expect-error
        const setIsDeleted = () => newPrinterSupplyType.setIsDeleted('someString');
        // @ts-expect-error
        const setDeletedAt = () => newPrinterSupplyType.setDeletedAt(true);
        
        expect(setName).toThrow('ValidationError');
        // expect(setLastUpdatedAt).toThrow('ValidationError');
        expect(setLastUpdatedBy).toThrow('ValidationError');
        expect(setIsDeleted).toThrow('ValidationError');
        // expect(setDeletedAt).toThrow('ValidationError');
    });
});
