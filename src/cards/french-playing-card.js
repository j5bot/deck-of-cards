import { names } from './french-deck-names.js';
import { values } from './french-deck-values.js';

import { Suits } from './suits.js';
import { BaseCard } from './base-card.js';

export class PlayingCard extends BaseCard {

  constructor( value, suit ) {
    super();

    this.value = value;
    this.name = names[
      value
    ];
    this.suit = {
      name: (suit.length && Suits[suit.toUpperCase()]) || Suits[suit].toLowerCase(),
      value: (suit.length && Suits[suit]) || suit
    };
    this.description = `${this.name} of ${this.suit.name}`;
  }

}
export default PlayingCard;
