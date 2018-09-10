import { BaseCardSet } from '../card-sets/BaseCardSet.js';
import { PlayingCard } from '../cards/FrenchPlayingCard.js';
import { Suits } from '../cards/suits.js';
import { names } from '../cards/french-deck-names.js';
import { values } from '../cards/french-deck-values.js';

export class Deck extends BaseCardSet {

  constructor() {
    super();

    const cards = this.cards;
    this.suits = Suits.elements;

    this.suits.forEach(
      (suit, suitIndex) => {
        names.forEach(
          (name, nameIndex) => {
            if ( nameIndex === 0 ) {
              return;
            }
            const card = new PlayingCard(
              nameIndex, suitIndex
            );
            cards.add(card);
          }
        );
      }
    );

  }

};
export default {};
