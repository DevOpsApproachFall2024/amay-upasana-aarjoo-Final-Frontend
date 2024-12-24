module.exports = {
  // Existing configuration
  setupFiles: ['<rootDir>/setup.jest.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^src/(.*)': '<rootDir>/src/$1', // Map imports like src/components to /src/components
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest', // Handles JavaScript and JSX
  },
};
