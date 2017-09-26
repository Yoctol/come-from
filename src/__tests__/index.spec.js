const { join } = require('path');
const { readdirSync } = require('fs');

const comeFrom = require('../');

const platforms = join(__dirname, '..', '__fixtures__');

readdirSync(platforms).forEach(platform => {
  const fixtures = join(__dirname, '..', '__fixtures__', platform);
  describe(platform, () => {
    readdirSync(fixtures).forEach(fixture => {
      it(fixture, () => {
        const body = require(`../__fixtures__/${platform}/${fixture}`);
        expect(comeFrom(body)).toBe(platform);
      });
    });
  });
});
