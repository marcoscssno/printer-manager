import { PrinterSupply } from '@entity/printerSupply/PrinterSupply';
import { faker } from '@faker-js/faker';

const ipAddress = faker.internet.ipv4();
const manufacturer = faker.company.name();
const model = faker.string.alpha({ casing: 'upper', length: 3 }) + faker.string.numeric(3);
const serialNumber = faker.string.alphanumeric({ casing: 'upper', length: 10 });
const propertyNumber = faker.string.numeric(6)
const tonerData = {
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
const toner = new PrinterSupply(tonerData);
const drumData = {
    id: faker.string.uuid,
    name: 'Drum',
    level: faker.string.numeric(2),
    createdAt: faker.date.recent(),
    createdBy: faker.internet.userName(),
    lastUpdatedAt: null,
    lastUpdatedBy: null,
    isDeleted: null,
    deletedAt: null,
};
const drum = new PrinterSupply(drumData);
const fuserData = {
    id: faker.string.uuid,
    name: 'Fuser',
    level: faker.string.numeric(2),
    createdAt: faker.date.recent(),
    createdBy: faker.internet.userName(),
    lastUpdatedAt: null,
    lastUpdatedBy: null,
    isDeleted: null,
    deletedAt: null,
};
const fuser = new PrinterSupply(fuserData);
const supply = [toner, drum, fuser]

const fakePrinter = {
    ipAddress,
    manufacturer,
    model,
    serialNumber,
    propertyNumber,
    supply
}

export {
    fakePrinter
}