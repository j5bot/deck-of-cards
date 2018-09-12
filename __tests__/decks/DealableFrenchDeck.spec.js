import { DealableDeck } from '../../src/decks/DealableFrenchDeck.js';
import { PlayingCard } from '../../src/cards/FrenchPlayingCard.js';

describe('dealer', () => {

  const deck = new DealableDeck();
  const cardArray = deck.cardArray.slice();

  const testIsCard = (card) => {
    expect(card).toBeDefined();
    expect(card instanceof PlayingCard).toBe(true);
  };

  deck.shuffle(7);

  describe('dealable', () => {

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

});
