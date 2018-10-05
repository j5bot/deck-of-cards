import { names } from '../../src/cards/french-deck-names.js';

describe('names', () => {

  test('array', () => {

    expect(names).toEqual(
      [
        // undefined,
        'Ace',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
        'Ten',
        'Jack',
        'Queen',
        'King'
      ]
    );

  });

});
