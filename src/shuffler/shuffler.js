import getRandomValues from 'get-random-values';

const getRandomInt = (min, max) => {
  // Create byte array and fill with 1 random number
  const byteArray = new Uint8Array(1);

  getRandomValues(byteArray);

  const range = max - min + 1;
  const maxRange = 256;

  if (byteArray[0] >= Math.floor(maxRange / range) * range) {
    return getRandomInt(min, max);
  }
  return min + (byteArray[0] % range);
};

export const shuffler = (Base) => class extends Base {

  randomize () {

    const randomized = [];
    const array = this.cardArray;

    const randomizer = () => {
      return getRandomInt(0, array.length - 1);
    };

    let position;
    let card;

    while (array.length) {
      // a random position from which to get the value of a card
      position = randomizer();
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

  shuffle (randomizations) {
    while (randomizations--) {
      this.randomize();
    }
  }

};
