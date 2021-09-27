module.exports = {
  moduleNameMapper: {
    '^@/(.*svg)(\\?inline)$': '<rootDir>/$1',
    '^@/(.*)$': '<rootDir>/$1',
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
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
    '<rootDir>/services/**/*.js',
    '<rootDir>/states/**/*.js',
  ],
  testEnvironment: 'jsdom'
}
