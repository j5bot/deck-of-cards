import { BaseCard } from '../../src/cards/BaseCard.js';
import { BaseCardSet } from '../../src/card-sets/BaseCardSet.js';

describe('base card set', () => {

  describe('card set', () => {

    const cardNames = [
      'first card',
      'second card',
      'third card',
      'fourth card',
      'fifth card',
      'sixth card',
      'seventh card',
      'eighth card',
      'ninth card',
      'tenth card'
    ];

    const cardArray = cardNames.map(
      (name) => {
        return new BaseCard(name);
      }
    );

    const set = new BaseCardSet();
    const populatedSet = new BaseCardSet(cardArray);

    describe('members', () => {

      test('cards', () => {
        expect(set).toHaveProperty('cards');
        expect(populatedSet).toHaveProperty('cards');
      });

      test('cards class', () => {
        expect(set.cards).toBeInstanceOf(Set);
        expect(populatedSet.cards).toBeInstanceOf(Set);
      });

      test('size', () => {
        expect(set.size()).toBeDefined();
        expect(populatedSet.size()).toEqual(cardArray.length);
      });

      test('iterator', () => {
        expect(set.iterator()).toBeDefined();
      });

      test('iterator methods', () => {
        expect(populatedSet
          .iterator()
            .next()).toBeDefined();
      });

      test('iterator value', () => {
        expect(populatedSet
          .iterator()
            .next()
              .value
                .description).toEqual(cardNames[0])
      });

      test('array', () => {
        expect(set.array()).toBeDefined();
        expect(set.array().length).toBe(0);
        expect(populatedSet.array()).toBeInstanceOf(Array);
      });

      test('get', () => {
        expect(set.get(0)).toBeUndefined();
        expect(populatedSet
          .get(0)
            .description).toEqual(cardNames[0]);
      });

    });

    describe('cards', () => {

      const cards = populatedSet.cards;
      const noCards = set.cards;

      describe('methods', () => {

        test('add', () => {
          expect(cards).toHaveProperty('add');
          expect(cards.add(
            new BaseCard('eleventh card')
          ));
        });

        test('size', () => {
          expect(cards.size).toBeDefined();
          expect(cards.size).toEqual(cardArray.length + 1);
        });

      });

    });

  });

});
