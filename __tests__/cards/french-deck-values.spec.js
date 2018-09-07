import { values } from '../../src/cards/french-deck-values.js';

describe('values', () => {

  test('array', () => {

    expect(values).toEqual(
      [undefined,1,2,3,4,5,6,7,8,9,10,10,10]
    );

  });

});
