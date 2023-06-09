import { faker } from '@faker-js/faker';

const fakeIpAddress = () => faker.internet.ipv4();
const fakeManufacturer = () => faker.company.name();
const fakeModel = () => faker.string.alpha({ casing: 'upper', length: 3 }) + faker.string.numeric(3);
const fakeSerialNumber = () => faker.string.alphanumeric({ casing: 'upper', length: 12 });
const fakePropertyNumber = () => faker.number.int({ min: 100000, max: 999999 });
const fakeId = () => faker.string.uuid();
const fakeLevel = () => faker.number.int({ min: 0, max: 100 });
const fakeRecentDate = () => faker.date.recent();
const fakeUserName = () => (faker.person.firstName() + '.' + faker.person.lastName()).toLowerCase();

export {
    fakeIpAddress,
    fakeManufacturer,
    fakeModel,
    fakeSerialNumber,
    fakePropertyNumber,
    fakeId,
    fakeLevel,
    fakeRecentDate,
    fakeUserName
}