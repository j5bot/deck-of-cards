import { Deck } from '../../src/decks/FrenchDeck.js';

describe('card deck', () => {

  const deck = new Deck();

  describe('cards', () => {

    test('card class', () => {
      expect(deck.cards).toBeInstanceOf(Set);
    });

    test('card size', () => {
      expect(deck.cards).toHaveProperty('size');
      expect(deck.cards.size).toBe(52);
    });

    test('iterator', () => {
      expect(deck.iterator()).toBeDefined();
    });

  });

});
