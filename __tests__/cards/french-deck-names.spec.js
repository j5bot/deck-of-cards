import { names } from '../../src/cards/french-deck-names.js';

describe('names', () => {

  test('array', () => {

    expect(names).toEqual(
      [
        undefined,
        'ace',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'jack',
        'queen',
        'king'
      ]
    );

  });

});
