module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](build|docs|node_modules)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setuptests.ts'],
}
