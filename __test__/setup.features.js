const setupDB = require('./support/cleanDatabase');

// eslint-disable-next-line no-return-await
global.afterEach(async () => await setupDB());
