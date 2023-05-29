import { PrinterSupply } from '@entity/printerSupply/PrinterSupply';
import { fakeIpAddress, fakeManufacturer, fakeModel, fakeSerialNumber, fakePropertyNumber, fakeId, fakeLevel, fakeRecentDate, fakeUserName } from './fakeProp';

const tonerData = {
    id: fakeId(),
    name: 'Toner',
    level: fakeLevel(),
    createdAt: fakeRecentDate(),
    createdBy: fakeUserName(),
    lastUpdatedAt: null,
    lastUpdatedBy: null,
    isDeleted: null,
    deletedAt: null,
};
const toner = new PrinterSupply(tonerData);
const drumData = {
    id: fakeId(),
    name: 'Drum',
    level: fakeLevel(),
    createdAt: fakeRecentDate(),
    createdBy: fakeUserName(),
    lastUpdatedAt: null,
    lastUpdatedBy: null,
    isDeleted: null,
    deletedAt: null,
};
const drum = new PrinterSupply(drumData);
const fuserData = {
    id: fakeId(),
    name: 'Fuser',
    level: fakeLevel(),
    createdAt: fakeRecentDate(),
    createdBy: fakeUserName(),
    lastUpdatedAt: null,
    lastUpdatedBy: null,
    isDeleted: null,
    deletedAt: null,
};
const fuser = new PrinterSupply(fuserData);
const supply = [toner, drum, fuser]

const fakePrinter = {
    ipAddress: fakeIpAddress(),
    manufacturer: fakeManufacturer(),
    model: fakeModel(),
    serialNumber: fakeSerialNumber(),
    propertyNumber: fakePropertyNumber(),
    supply
}

export {
    fakePrinter
}