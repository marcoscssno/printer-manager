import { InMemoryPrinterRepository } from "@repository/printer/implementation/InMemoryPrinterRepository";
import { CreatePrinterUseCase } from "./createPrinterUseCase";
import { CreatePrinterRequestDTO } from "./createPrinterRequestDTO";
import { faker } from '@faker-js/faker';
import { PrinterSupply } from "@entity/printerSupply/PrinterSupply";

const inMemoryPrinterRepository = new InMemoryPrinterRepository();

const makeSut = () => {
    const sut = new CreatePrinterUseCase(inMemoryPrinterRepository);
    return sut;
};

describe('It should create a printer', () => {
    it('should create a printer', async () => {
        // Arrange
        const sut = makeSut();
        const ipAddress = faker.internet.ipv4();
        const manufacturer = faker.company.name();
        const model = faker.string.alpha({ casing: 'upper', length: 3 }) + faker.string.numeric(3);
        const serialNumber = faker.string.alphanumeric({ casing: 'upper', length: 10 });
        const propertyNumber = faker.string.numeric(6)
        const printerSupplyData = {
            id: faker.string.uuid,
            name: 'Toner',
            level: faker.string.numeric(2),
            createdAt: faker.date.recent(),
            createdBy: faker.internet.userName(),
            lastUpdatedAt: null,
            lastUpdatedBy: null,
            isDeleted: null,
            deletedAt: null,
        };
        const toner = new PrinterSupply(printerSupplyData);
        const supply = [ toner ]
        const data: CreatePrinterRequestDTO = {
            ipAddress,
            manufacturer,
            model,
            serialNumber,
            propertyNumber,
            supply
        }
        const allPrinters = await inMemoryPrinterRepository.findAll();
        // Act
        await sut.execute(data);
        // Assert
        expect(allPrinters[0]).toHaveProperty('ipAddress', ipAddress);
        expect(allPrinters[0]).toHaveProperty('manufacturer', manufacturer);
        expect(allPrinters[0]).toHaveProperty('model', model);
        expect(allPrinters[0]).toHaveProperty('serialNumber', serialNumber);
        expect(allPrinters[0]).toHaveProperty('propertyNumber', propertyNumber);
        expect(allPrinters[0]).toHaveProperty('supply', supply);
    });
});