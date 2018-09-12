import { ShufflableDeck } from './ShufflableFrenchDeck.js';
import { dealer } from '../dealer/dealer.js';

export class DealableDeck extends dealer(ShufflableDeck) {
}

export default DealableDeck;
