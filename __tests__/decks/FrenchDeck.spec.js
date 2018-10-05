import { PlayingCard } from '../../src/cards/FrenchPlayingCard.js';
import { Deck } from '../../src/decks/FrenchDeck.js';
import { Suits } from '../../src/cards/Suits.js';
import { names } from '../../src/cards/french-deck-names.js';

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

    describe('card values', () => {

      const iterator = deck.iterator();
      const suits = Suits.elements;

      const testEachCard = (suit, suitIndex, name, nameIndex) => {

        // if (nameIndex === 0) {
        //   return;
        // }

        const expectCard = new PlayingCard(
          nameIndex, suitIndex
        );

        const card = iterator.next().value;

        test(expectCard.description, () => {
          expect(card).toEqual(expectCard);
        });

      };

      suits.forEach(
        (suit, suitIndex) => {

          names.forEach(
            (name, nameIndex) => {

              testEachCard(suit, suitIndex, name, nameIndex);

            }
          );

        }
      );

    });

  });

});
