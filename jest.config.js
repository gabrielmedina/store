module.exports = {
  moduleNameMapper: {
    '^~/(.*svg)(\\?inline)$': '<rootDir>/$1',
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'vue',
    'json'
  ],
  transform: {
    '^.+\\.svg': '<rootDir>/test/_support/svgTransform.js',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/layouts/**/*.vue',
    '<rootDir>/components/**/*.vue',
    '<rootDir>/services/**/*.js',
    '<rootDir>/states/**/*.js',
  ],
  setupFilesAfterEnv: ['<rootDir>/test/_support/jestSetup.js'],
  testEnvironment: 'jsdom'
}
