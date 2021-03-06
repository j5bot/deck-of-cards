import { names } from './french-deck-names.js';
import { values } from './french-deck-values.js';

import { Suits } from './Suits.js';
import { BaseCard } from './BaseCard.js';

export class PlayingCard extends BaseCard {

  constructor (index, suit) {
    super();

    this.index = index;
    this.value = values[index];
    this.name = names[
      index
    ];
    this.lower = names[index].toLowerCase();
    this.suit = {
      name:  Suits[suit],
      lower: Suits[suit].toLowerCase(),
      value: suit
    };
    this.description = `${this.name} of ${this.suit.name}`;
  }

}
export default PlayingCard;
