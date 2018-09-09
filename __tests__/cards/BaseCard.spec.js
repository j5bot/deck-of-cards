import { BaseCard } from '../../src/cards/BaseCard.js';

describe('base card', () => {

  test('description', () => {

    const description = 'This is a description of a base card.';

    const card = new BaseCard(description);
    expect(card.description).toBe(description);

  });

});
