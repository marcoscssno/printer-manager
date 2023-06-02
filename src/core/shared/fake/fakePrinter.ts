import { fakeIpAddress, fakeManufacturer, fakeModel, fakeSerialNumber, fakePropertyNumber, fakeId, fakeLevel, fakeRecentDate, fakeUserName } from './fakeProp';

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
}