import { Suits } from '../../src/cards/Suits.js';

describe('suits', () => {

  test('clubs', () => {
    expect(Suits.CLUBS).toBe(0);
    expect(Suits[0]).toBe('CLUBS');
  });

  test('diamonds', () => {
    expect(Suits.DIAMONDS).toBe(1);
    expect(Suits[1]).toBe('DIAMONDS');
  });

  test('hearts', () => {
    expect(Suits.HEARTS).toBe(2);
    expect(Suits[2]).toBe('HEARTS');
  });

  test('spades', () => {
    expect(Suits.SPADES).toBe(3);
    expect(Suits[3]).toBe('SPADES');
  });

});
