module.exports = {
  'moduleFileExtensions': [
    'js',
    'jsx'
  ],
  testMatch: [
    '**/*.(test|spec).(js|jsx)'
  ],
  'transform': {
    '^.+\\.js$': 'babel-jest'
  },
  globals: {
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'enzyme.js'
  ],
  setupTestFrameworkScriptFile: '<rootDir>/enzyme.js',
  coverageReporters: [
    'json',
    'lcov',
    'text',
    'text-summary'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__test__/__mocks__/mocks.js',
    '\\.(css|less|scss)$': '<rootDir>/__test__/__mocks__/mocks.js'
  }
}
