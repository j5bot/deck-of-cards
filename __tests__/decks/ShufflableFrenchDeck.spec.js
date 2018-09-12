/*
Test shuffler() mixin class methods exposed by Deck class
 */
import { ShufflableDeck } from '../../src/decks/ShufflableFrenchDeck.js';

describe('shuffler', () => {

  const makePadString = (length, character) => {
    let padString = '';
    let slice;

    length = String(length).length;
    slice = length * -1;

    while (length--) {
      padString += character;
    }
    return (number) => {
      return (padString + number).slice(slice);
    };
  };

  const makeNameCard = (array) => {
    const padder = makePadString(array.length, '0');

    return (card) => {
      return nameCard(card, padder);
    };

  };

  const nameCard = (card, padder) => {
    return `${ card.suit.value }-${ padder(card.index) }: ${ card.description }`;
  };

  const cardDescription = (card) => { return card.description; };
  const cardIsNotRandomized = (card) => { return card.randomized === 0; };

  const makeRandomizedFilter = (rzs) => {
    return (card) => {
      return card.randomized !== rzs;
    };
  };

  describe('randomize', () => {
    const shufflable = new ShufflableDeck();
    const original = shufflable.cardArray.map(
      (card) => { return card.description; }
    );

    test('randomize', () => {
      expect(shufflable.randomize()).toBeDefined();
    });

    shufflable.randomize();

    const newOrder = shufflable.cardArray.map(
      cardDescription
    );

    describe('randomized', () => {
      const notRandomized = shufflable.cardArray.filter(
        cardIsNotRandomized
      );

      test('length', () => {
        expect(notRandomized).toHaveLength(0);
      });
      test('order', () => {
        expect(original).not.toEqual(newOrder);
      });

    });

  });

  describe('shuffle', () => {
    let original;
    let newOrder;
    let notShuffled;

    describe('shuffle', () => {
      const shufflable = new ShufflableDeck();
      const nameCard = makeNameCard(
        shufflable.cardArray
      );

      const randomizations = 7;
      const shuffledFilter = makeRandomizedFilter(
        randomizations
      );

      original = shufflable.cardArray.map(
        nameCard
      );

      shufflable.shuffle(randomizations);

      newOrder = shufflable.cardArray.map(
        nameCard
      );
      notShuffled = shufflable.cardArray.filter(
        shuffledFilter
      );

      test('length', () => {
        expect(notShuffled).toHaveLength(0);
      });
      test('order', () => {
        expect(original).not.toEqual(newOrder);
      });

    });

    test('sizes', () => {
      expect(original).toHaveLength(52);
      expect(newOrder).toHaveLength(original.length);
    });

    test('reorder', () => {
      const ordered = newOrder.sort();

      expect(ordered).toEqual(original);
    });

  });

});
