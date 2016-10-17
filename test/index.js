const assert = require('assert');
const Yaol = require('../');

describe('yaol', () => {
  it('must have a method err', (done) => {
    assert(typeof Yaol.err, 'function');
    done();
  });

  it('must have a method info', (done) => {
    assert(typeof Yaol.info, 'function');
    done();
  });

  it('must have a method warn', (done) => {
    assert(typeof Yaol.warn, 'function');
    done();
  });

  it('must have a method changeMessenger', (done) => {
    assert(typeof Yaol.changeMessenger, 'function');
    done();
  });
});
