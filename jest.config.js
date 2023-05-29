/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@entity/(.*)$': '<rootDir>/src/core/entity/$1',
    '^@helper/(.*)$': '<rootDir>/src/core/helper/$1',
    '^@repository/(.*)$': '<rootDir>/src/core/repository/$1',
    '^@service/(.*)$': '<rootDir>/src/core/service/$1',
    '^@useCase/(.*)$': '<rootDir>/src/core/useCase/$1',
    '^@shared/(.*)$': '<rootDir>/src/core/shared/$1',
  },
};
