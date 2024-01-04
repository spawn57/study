const nxPreset = require('@nx/jest/preset').default;

module.exports = {
    ...nxPreset,
    testMatch: ['<rootDir>/**/**.steps.ts', '<rootDir>/**/**.spec.ts']
};
