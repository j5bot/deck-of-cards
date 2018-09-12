const dealFIFO = ({ deck, quantity } = {}) => {
  const iterator = deck._iterator_ || (deck._iterator_ = deck.iterator());
  const result = [];

  const next = () => {
    return iterator.next().value;
  };

  if (quantity === 1) {
    return next();
  }

  while (quantity--) {
    result.push(next());
  }

  return result;
};

const dealWTFO = ({ deck, quantity } = {}) => {
  const result = [];

  if (quantity === 1) {
    return deck.randomCard();
  }

  while (quantity--) {
    result.push(deck.randomCard());
  }

  return result;
};

export const dealer = (Base) => class extends Base {

  /**
   * deal from deck with either a FIFO style or a WTFO (random) style
   *
   * @param  {Number} quantity optional number of cards to deal
   * @param  {String} method   optional dealing method (FIFO or WTFO)
   * @return {Array}           an array of dealt cards
   */
  deal ({ quantity = 1, method = 'FIFO' } = {}) {
    switch (method) {
    case 'WTFO':
      return dealWTFO({ deck: this, quantity });
    case 'FIFO':
    default:
      return dealFIFO({ deck: this, quantity });
    }
  }

};

export default dealer;
