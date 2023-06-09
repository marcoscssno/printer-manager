import { fakeRecentDate, fakeUserName } from '@shared/fake/fakeProp';

const fakeMetaData = () => {
    return {
        createdAt: fakeRecentDate(),
        createdBy: fakeUserName(),
        lastUpdatedAt: null,
        lastUpdatedBy: null,
        isDeleted: false,
        deletedAt: null
    }
};

export {
    fakeMetaData
};
