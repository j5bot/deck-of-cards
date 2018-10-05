import { Suits } from '../../src/cards/Suits.js';

describe('suits', () => {

  test('clubs', () => {
    expect(Suits.Clubs).toBe(0);
    expect(Suits.clubs).toBe(0);
    expect(Suits.CLUBS).toBe(0);
    expect(Suits[0]).toBe('Clubs');
  });

  test('diamonds', () => {
    expect(Suits.Diamonds).toBe(1);
    expect(Suits.diamonds).toBe(1);
    expect(Suits.DIAMONDS).toBe(1);
    expect(Suits[1]).toBe('Diamonds');
  });

  test('hearts', () => {
    expect(Suits.Hearts).toBe(2);
    expect(Suits.hearts).toBe(2);
    expect(Suits.HEARTS).toBe(2);
    expect(Suits[2]).toBe('Hearts');
  });

  test('spades', () => {
    expect(Suits.Spades).toBe(3);
    expect(Suits.spades).toBe(3);
    expect(Suits.SPADES).toBe(3);
    expect(Suits[3]).toBe('Spades');
  });

  test('length', () => {
    expect(Suits).toHaveLength(4);
  });

});
