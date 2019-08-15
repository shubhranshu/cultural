import { Cultural } from '../index';

describe('sanity test', function() {
  it('Can init the library', function() {
    let culture = new Cultural('1211664');
    culture.Mind.getRandom();
  });
});
