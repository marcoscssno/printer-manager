import { Printer } from "./Printer";
import { fakePrinter } from "@shared/fake/fakePrinter";

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
});
