const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@\/authorizedPages$': '<rootDir>/components/authorizedPages',
    '^@\/unauthorizedPages$': '<rootDir>/components/unauthorizedPages',
    '^@/(.*)$': '<rootDir>/$1',
    '/^@\/utils(.*)$': '<rootDir>/utils/$1',
  },
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  transformIgnorePatterns: [],
  testEnvironment: 'jest-environment-jsdom',

}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
