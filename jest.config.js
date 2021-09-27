module.exports = {
  setupFilesAfterEnv: [
    'jest-plugin-context/setup',
    '@testing-library/jest-dom/extend-expect',
  ],
  testEnvironment: 'jest-environment-jsdom-global',
};
