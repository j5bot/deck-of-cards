# Playing Cards Implementation Notes #

Listing tasks needed for completing the implementation, and notes recording approach / progress towards completing the individual tasks.

* [x] Create an enum representing the "standard" card suits.

## Create an enum representing the "standard" card suits ##

ES6 doesn't come with an Enum class out of the box, so a class to create Enums was needed.  The class was created with options to provide the enum 'labels' either as multiple string parameters, a single comma-delimited string parameter, or a mix of the two.

Created a module which exports an enum which represents the four different suits, in alphabetical order.

* [x] Created an Enum class to generate enum objects.
* [x] Created unit test for Enum class constructor.

* [x] Created unit test for suits module / Suits object
* [x] Created a module to initialize an Enum for the card suits.

## Create a class representing a single playing card ##

Created a base playing card class and matching unit tests.

* [x] Include a card description property.

## Create a class representing a "standard" playing card ##

Created the unit test for the standard card, using the ace of spades as the first test case.  Created more unit tests to iterate through all of the cards in a standard deck and run the same tests against them.  Created modules to represent the names and values of the standard playing cards.

Adjusted the logic of the tests and card class to use something like a 1-based indexed array (0 index value is undefined).

* [x] Include an object member property for the suit, with name and value properties.
* [x] Include a member property for the value.
* [x] Include a member property for the name (e.g. 'ace', 'jack', 'queen', 'king').
* [x] Set the description property to 'name of suit'

## Create a class representing any set of cards ##

Created a class representing a set of cards.

* [x] Include a member property containing objects representing each card.
* [x] Include a member method to get the size of the set.
* [x] Include a member method to get an iterator which returns cards from the set.
* [x] Include a member method to get a single card by index.

## Create a class representing the "standard" deck of cards as a set of cards ##

Created a Deck class.

* [x] Iterates through all suits, creating a card of each name for each suit and adding it to the set of cards

# Reference #
	
1. Create a class representing the "standard" deck of cards as a set of cards.
	
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
