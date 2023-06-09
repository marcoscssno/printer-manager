import { fakeIpAddress, fakeManufacturer, fakeModel, fakePropertyNumber, fakeSerialNumber } from './fakeProp';

const fakePrinter = () => {
    return {
        ipAddress: fakeIpAddress(),
        manufacturer: fakeManufacturer(),
        model: fakeModel(),
        serialNumber: fakeSerialNumber(),
        propertyNumber: fakePropertyNumber()
    }
}

export {
    fakePrinter
};
