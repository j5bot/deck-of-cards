import { Suits } from '../../src/cards/suits.js';
import { PlayingCard } from '../../src/cards/french-playing-card.js';

describe('playing card', () => {

  const suits = [
    'clubs',
    'diamonds',
    'hearts',
    'spades'
  ];

  const names = [
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
  ];

  const values = [1,2,3,4,5,6,7,8,9,10,10,10];

  test('single card', () => {

    const aceOfSpades = new PlayingCard(1, Suits.SPADES);
    expect(aceOfSpades.suit).toBe('spades');
    expect(aceOfSpades.name).toBe('ace');
    expect(aceOfSpades.value).toBe(1);
    expect(aceOfSpades.description).toBe('ace of spades');

    expect(
      Suits[aceOfSpades.suit.toUpperCase()]
    ).toBe(3);

  });

});
