import { Suits } from '../../src/cards/suits.js';
import { PlayingCard } from '../../src/cards/french-playing-card.js';
import { names } from '../../src/cards/french-deck-names.js';
import { values } from '../../src/cards/french-deck-values.js';

describe('playing card', () => {

  const suits = [
    'clubs',
    'diamonds',
    'hearts',
    'spades'
  ];

  describe('single card', () => {

    const aceOfSpades = new PlayingCard(1, Suits.SPADES);

    test('suit name', () => {
      expect(aceOfSpades.suit.name).toBe('spades');
    });
    test('name', () => {
      expect(aceOfSpades.name).toBe('ace');
    });
    test('value', () => {
      expect(aceOfSpades.value).toBe(1);
    });
    test('description', () => {
      expect(aceOfSpades.description).toBe('ace of spades');
    });
    test('suit value', () => {
      expect(aceOfSpades.suit.value).toBe(3);
    });
    test('suit enum value', () => {
      expect(
        Suits[aceOfSpades.suit.name.toUpperCase()]
      ).toBe(3);
    });

  });

  describe('every card', () => {

    suits.forEach(
      (suit, suiteIndex) => {

        values.forEach(
          (value, valueIndex) => {

            if ( valueIndex === 0 ) {
              return;
            }

            const card = new PlayingCard(
              valueIndex,
              Suits[suit.toUpperCase()]
            );

            const description = `${card.name} of ${card.suit.name}`;

            describe(description, () => {

              test('suit name', () => {
                expect(card.suit.name).toBe(suit);
              });
              test('name', () => {
                expect(card.name).toBe(
                  names[valueIndex]
                );
              });
              test('value', () => {
                expect(card.value).toBe(valueIndex);
              });
              test('description', () => {
                expect(card.description).toBe(description);
              });
              test('suit value', () => {
                expect(card.suit.value).toBe(
                  Suits[card.suit.name.toUpperCase()]
                );
              });
              test('suit enum value', () => {
                expect(
                  Suits[card.suit.value]
                ).toBe(card.suit.name.toUpperCase());
              });

            });

          }
        );

      }
    );

  });

});
