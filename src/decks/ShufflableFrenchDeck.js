import { shuffler } from '../shuffler/shuffler.js';
import { Deck } from './FrenchDeck.js';

export class ShufflableDeck extends shuffler(Deck) {
}

export default ShufflableDeck;
