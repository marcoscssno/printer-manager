import { Printer } from "./Printer";
import { fakePrinter } from "@shared/fake/fakePrinter";
import { PrinterProps } from "./PrinterProps";
import { fakeIpAddress, fakeManufacturer, fakeModel, fakeSerialNumber, fakePropertyNumber, fakeRecentDate, fakeUserName } from '@shared/fake/fakeProp';

describe('Printer Entity', () => {
    it('should instantiate a printer entity', () => {
        // Arrange
        const metaData = {
            createdAt: new Date(),
            createdBy: 'user',
            lastUpdatedAt: null,
            lastUpdatedBy: null,
            isDeleted: false,
            deletedAt: null
        }
        const data = {
            ...metaData,
            ...fakePrinter()
        }
        // Act
        const newPrinter = new Printer(data);
        // Assert
        expect(newPrinter).toBeInstanceOf(Printer);
    });
    it('should validate props on constructor', () => {
        const metaData = {
            createdAt: new Date(),
            createdBy: 'user',
            lastUpdatedAt: null,
            lastUpdatedBy: null,
            isDeleted: false,
            deletedAt: null
        }
        const data: Omit<PrinterProps, 'id'> = {
            ...metaData,
            // @ts-expect-error
            manufacturer: undefined
        }
        // Act
        
        // Assert
        expect(() => new Printer(data)).toThrow();
    });
    it('should require a manufacturer', () => {
        const metaData = {
            createdAt: new Date(),
            createdBy: 'user',
            lastUpdatedAt: null,
            lastUpdatedBy: null,
            isDeleted: false,
            deletedAt: null
        }
        // @ts-expect-error
        const data: Omit<PrinterProps, 'id'> = {
            ...metaData,
            ipAddress: fakePrinter().ipAddress,
            model: fakePrinter().model,
            serialNumber: fakePrinter().serialNumber,
            propertyNumber: fakePrinter().propertyNumber
        }
        // Act
        
        // Assert
        expect(() => new Printer(data)).toThrow('manufacturer');
    });
    it('should assign new id when no id is specified', () => {
        const metaData = {
            createdAt: new Date(),
            createdBy: 'user',
            lastUpdatedAt: null,
            lastUpdatedBy: null,
            isDeleted: false,
            deletedAt: null
        }
        const data: Omit<PrinterProps, 'id'> = {
            ...metaData,
            ...fakePrinter()
        }
        // Act
        const newPrinter = new Printer(data);
        // Assert
        expect(newPrinter.getId()).toBeDefined();
    });
    it('should instantiate a printer entity', () => {
        // Arrange
        const metaData = {
            createdAt: new Date(),
            createdBy: 'user',
            lastUpdatedAt: null,
            lastUpdatedBy: null,
            isDeleted: false,
            deletedAt: null
        }
        const data = {
            ...metaData,
            ...fakePrinter()
        }
        const customId = 'f8211523-14a1-4a0b-b263-c6d0eec01c51';
        // Act
        const newPrinter = new Printer(data, customId);
        // Assert
        expect(newPrinter.getId()).toBe(customId);
    });
    it('should validate on setter methods', () => {
        // Arrange
        const metaData = {
            createdAt: new Date(),
            createdBy: 'user',
            lastUpdatedAt: null,
            lastUpdatedBy: null,
            isDeleted: false,
            deletedAt: null
        }
        const data = {
            ...metaData,
            ...fakePrinter()
        }
        // Act
        const newPrinter = new Printer(data);
        // @ts-expect-error
        const setIpAddress = () => newPrinter.setIpAddress(false);
        // @ts-expect-error
        const setManufacturer = () => newPrinter.setManufacturer(false);
        // @ts-expect-error
        const setModel = () => newPrinter.setModel(false);
        // @ts-expect-error
        const setSerialNumber = () => newPrinter.setSerialNumber(false);
        // @ts-expect-error
        const setPropertyNumber = () => newPrinter.setPropertyNumber(false);
        // @ts-expect-error
        const setLastUpdatedAt = () => newPrinter.setLastUpdatedAt('someString');
        // @ts-expect-error
        const setLastUpdatedBy = () => newPrinter.setLastUpdatedBy(false);
        // @ts-expect-error
        const setIsDeleted = () => newPrinter.setIsDeleted('someString');
        // @ts-expect-error
        const setDeletedAt = () => newPrinter.setDeletedAt(true);
        // Assert
        expect(setIpAddress).toThrow('ValidationError');
        expect(setManufacturer).toThrow('ValidationError');
        expect(setModel).toThrow('ValidationError');
        expect(setSerialNumber).toThrow('ValidationError');
        expect(setPropertyNumber).toThrow('ValidationError');
        // expect(setLastUpdatedAt).toThrow('ValidationError');
        expect(setLastUpdatedBy).toThrow('ValidationError');
        expect(setIsDeleted).toThrow('ValidationError');
        // expect(setDeletedAt).toThrow('ValidationError');
    });
});
