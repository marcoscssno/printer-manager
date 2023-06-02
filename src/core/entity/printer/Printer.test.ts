import { Printer } from "./Printer";
import { fakePrinter } from "@shared/fake/fakePrinter";
import { PrinterProps } from "./PrinterProps";

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
        const customId = 'f8211523-14a1-4a0b-b263-c6d0eec01c51';
        // Act
        const newPrinter = new Printer(data, customId);
        // Assert
        expect(newPrinter.getId()).toBe(customId);
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
});
