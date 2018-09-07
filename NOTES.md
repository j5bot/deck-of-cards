# Playing Cards Implementation Notes #

Listing tasks needed for completing the implementation, and notes recording approach / progress towards completing the individual tasks.

* [ ] Create an enum representing the "standard" card suits.

## Create an enum representing the "standard" card suits

* [x] Created an Enum class to generate enum objects.
* [x] Created unit test for Enum class constructor.

* [x] Created unit test for suits module / Suits object
* [x] Created a module to initialize an Enum for the card suits.

1. Create an enum representing the "standard" cards in a suit.

1. Create a class representing a single playing card.
	* Include a member property containing a description of the card.
	
1. Create a class representing a "standard" playing card.
	* Include a member property for the suit.
	* Include a member property for the value.
	* Include a member property for the name (e.g. 'ace', 'jack', 'queen', 'king').

1. Create a class representing the "standard" deck of cards as a set of cards.

1. Create a class representing any set of cards.
	* Include a member property containing objects representing each card.
	* Include a member method to get the size of the set.
	* Include a member method to get an iterator which returns cards from the set.
	* Include a member method to get a single card by index.
	
1. Optional: Create a class representing a set of sets of cards.
	* Include a member decks of cards in the set.
	* Include a no parameter constructor which initializes the set of sets with a single set of cards.
	* Optional: Include a member property initializing the sets of cards to use.
	* Optional: Include a member property containing the number of randomizations required to shuffle the set of cards.
	* Include a member method to get an iterator which returns cards from the set.
	* Include a member method to get the size of the set (compound).
	* Include a member method to get a single card by index (compound).

1. Create a sub class implementing operations on a set of cards.
	* Include a member method implementing a shuffling algorithm.
		* Include a private member method implementing a single randomization of the set.
	* Include a member method implementing a linear card dealing algorithm (FIFO).
	* Include a member method implementing a random card dealing algorithm (WTFO).
	* Optional: Include a member method implementing the discarding of cards.
	* Optional: Include a member set containing objects representing playing cards which have been discarded (LIFO).
