module.exports = {
    preset: 'ts-jest',
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '/src/.*\\.test.(ts|tsx)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFiles: ['<rootDir>/src/setupTests.ts'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/index.tsx',
        '!src/setupTests.ts',
        '!src/serviceWorker.ts',
        '!src/react-app-env.d.ts',
    ]
}
