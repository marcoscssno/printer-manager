import { faker } from '@faker-js/faker';

const fakeIpAddress = () => faker.internet.ipv4();
const fakeManufacturer = () => faker.company.name();
const fakeModel = () => faker.string.alpha({ casing: 'upper', length: 3 }) + faker.string.numeric(3);
const fakeSerialNumber = () => faker.string.alphanumeric({ casing: 'upper', length: 12 });
const fakePropertyNumber = () => faker.number.int({ min: 100000, max: 999999 });
const fakeId = () => faker.string.uuid();
const fakeLevel = () => faker.string.numeric(2);
const fakeRecentDate = () => faker.date.recent();
const fakeUserName = () => (faker.person.firstName() + '.' + faker.person.lastName()).toLowerCase();

export {
    fakeId, fakeIpAddress, fakeLevel, fakeManufacturer,
    fakeModel, fakePropertyNumber, fakeRecentDate, fakeSerialNumber, fakeUserName
};
