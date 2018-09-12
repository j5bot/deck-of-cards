import { Suits } from '../../src/cards/Suits.js';
import { PlayingCard } from '../../src/cards/FrenchPlayingCard.js';
import { names } from '../../src/cards/french-deck-names.js';
import { values } from '../../src/cards/french-deck-values.js';

describe('playing card', () => {

  const suits = [
    'Clubs',
    'Diamonds',
    'Hearts',
    'Spades'
  ];

  describe('single card', () => {

    const aceOfSpades = new PlayingCard(1, Suits.SPADES);

    test('suit name', () => {
      expect(aceOfSpades.suit.name).toBe('Spades');
    });
    test('name', () => {
      expect(aceOfSpades.name).toBe('Ace');
    });
    test('value', () => {
      expect(aceOfSpades.value).toBe(1);
    });
    test('description', () => {
      expect(aceOfSpades.description.toLowerCase()).toBe('ace of spades');
    });
    test('suit value', () => {
      expect(aceOfSpades.suit.value).toBe(3);
    });
    test('suit enum value', () => {
      expect(
        Suits[aceOfSpades.suit.name]
      ).toBe(3);
    });

  });

  describe('every card', () => {

    const testEachCard = (suit, suitIndex, name, nameIndex) => {

      if (nameIndex === 0) {
        return;
      }

      const card = new PlayingCard(
        nameIndex,
        Suits[suit]
      );

      const description = `${card.name} of ${card.suit.name}`;

      describe(description, () => {

        test('suit name', () => {
          expect(card.suit.name).toBe(suit);
        });
        test('name', () => {
          expect(card.name).toBe(
            names[nameIndex]
          );
        });
        test('value', () => {
          expect(card.value).toBe(values[nameIndex]);
        });
        test('description', () => {
          expect(card.description.toLowerCase()).toBe(description.toLowerCase());
        });
        test('suit value', () => {
          expect(card.suit.value).toBe(
            Suits[card.suit.name]
          );
        });
        test('suit enum value', () => {
          expect(
            Suits[card.suit.value]
          ).toBe(card.suit.name);
        });

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
