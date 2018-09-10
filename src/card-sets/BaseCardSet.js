export class BaseCardSet {

  constructor( cardArray ) {

    if ( cardArray ) {
      this.cards = new Set( cardArray );
    } else {
      this.cards = new Set();
    }

    this.cardArray = [ ...this.cards ];

  }

  size() {
    return this.cards.size;
  }

  iterator() {
    return this.cards.values();
  }

  array() {
    return this.cardArray || [];
  }

  get( index ) {
    return this.cardArray[ index ];
  }

};
export default BaseCardSet;
