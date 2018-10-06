import { getRandomInt } from '../util/random.js';

const makeRandomizer = (min, max) => {
  return () => {
    return getRandomInt(min, max);
  };
};

export const shuffler = (Base) => class extends Base {

  randomize () {

    const randomized = [];
    const array = this.cardArray;
    const randomizer = makeRandomizer(0, array.length - 1);

    let position;
    let card;

    while (array.length) {
      // a random position from which to get the value of a card
      position = randomizer(array);
      // add the random card to the randomized set
      card = array[ position ];
      if (!card) {
        continue;
      }
      card.randomized = (card.randomized || 0) + 1;
      randomized.push(card);
      // remove the random card from the original set
      array.splice(position, 1);
    }

    // store the randomized cards in the cardArray property
    this.cardArray = randomized;

    // store the cards as a set
    this.cards = new Set(this.cardArray);

    return this.cards;
  }

  randomCard () {

    const unDealt =
      this.unDealt =
        (this.unDealt ||
          this.cardArray.filter(
            (card) => {
              return !card.dealt;
            }
          )
        );

    const randomizer = makeRandomizer(0, unDealt.length - 1);
    let position = randomizer();

    if (unDealt.length === 0) {
      return undefined;
    }

    const card = unDealt.splice(position, 1)[0];

    card.dealt = true;

    return card;

  }

  shuffle (randomizations) {
    while (randomizations--) {
      this.randomize();
    }
  }

};
