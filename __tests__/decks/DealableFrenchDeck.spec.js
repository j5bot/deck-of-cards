import { DealableDeck } from '../../src/decks/DealableFrenchDeck.js';
import { PlayingCard } from '../../src/cards/FrenchPlayingCard.js';

const testIsCard = (card) => {
  expect(card).toBeDefined();
  expect(card instanceof PlayingCard).toBe(true);
};

const filterUnDealt = (card) => {
  return !card.dealt;
};

describe('dealer', () => {

  describe('dealable', () => {

    const deck = new DealableDeck();
    const cardArray = deck.cardArray;

    let length;

    describe('fifo', () => {

      length = cardArray.length;

      while (length--) {
        const card = deck.deal();

        if (card && card.description) {
          /* eslint-disable no-loop-func */
          test(card.description, () => {
            testIsCard(card);
          });
          /* eslint-enable no-loop-func */
        }
      }

      describe('unavailable', () => {
        test('card unavailable', () => {
          const card = deck.deal();

          expect(card).toBeUndefined();
        });
      });

    });

    describe('wtfo', () => {

      length = deck.cardArray.length;

      while (length--) {

        const card = deck.deal({ method: 'WTFO' });

        // console.log(card);
        if (card && card.description) {
          /* eslint-disable no-loop-func */
          test(card.description, () => {
            testIsCard(card);
          });
          /* eslint-enable no-loop-func */
        }
      }

      describe('unavailable', () => {

        test('card unavailable', () => {
          const card = deck.deal({ method: 'WTFO' });

          expect(card).toBeUndefined();
        });

      });

    });

  });

  describe('resetable', () => {

    const deck = new DealableDeck();
    const cardArray = deck.cardArray;

    describe('reset', () => {

      describe('fifo', () => {
        const firstDeal = deck.deal();

        test('first deal is first card', () => {
          expect(firstDeal).toEqual(deck.get(0));
        });

        test('first deal after reset is identical', () => {
          deck.reset();
          expect(deck.deal()).toEqual(firstDeal);
        });

      });

      /* eslint-disable jest/prefer-to-have-length */
      describe('wtfo', () => {

        let unDealt;

        test('all cards undealt', () => {
          unDealt = cardArray.filter(filterUnDealt);
          expect(unDealt.length).toBe(cardArray.length);
        });

        test('after deal, one card dealt', () => {
          deck.deal({ method: 'WTFO' });
          unDealt = cardArray.filter(filterUnDealt);
          expect(unDealt.length).toBe(cardArray.length - 1);
        });

        test('all cards undealt after reset', () => {

          deck.reset();

          unDealt = cardArray.filter(filterUnDealt);
          expect(unDealt.length).toBe(cardArray.length);
        });

      });
      /* eslint-enable jest/prefer-to-have-length */

    });

  });

  describe('hand of cards', () => {

    const deck = new DealableDeck();

    test('fifo', () => {

      const hand = deck.deal({ quantity: 5 });

      expect(hand).toHaveLength(5);
      expect(hand).toEqual(deck.cardArray.slice(0, 5));

    });

    /* eslint-disable jest/prefer-to-have-length */
    test('wtfo', () => {

      const hand = deck.deal({ method: 'WTFO', quantity: 5 });
      const unDealt = deck.cardArray.filter(filterUnDealt);

      expect(hand).toHaveLength(5);
      expect(unDealt.length).toBe(deck.cardArray.length - 5);

    });
    /* eslint-enable jest/prefer-to-have-length */

  });

});
