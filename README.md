[![CodeFactor: j5bot/deck-of-cards](https://www.codefactor.io/repository/github/j5bot/deck-of-cards/badge?style=for-the-badge)](https://www.codefactor.io/repository/github/j5bot/deck-of-cards/)

# deck-of-cards #

An exercise in the implementation of playing cards in ES6.

## Requirements ##

`deck-of-card	s` requires `nvm` and/or versions of `node` >= `10.8.0` and either `npm` >= `6.3.0` or `yarn` >= `1.9.4	`.

## Setup ##

1. If using `nvm`, execute the following command in a terminal:
   
   `nvm use`
1. To install `node` dependencies with `npm`, execute the following command in a terminal:

	`npm install`
	
1. To install `node` dependencies with `yarn`, execute the following commands in a terminal:

	```
	rm package-lock.json
	yarn install
	```
	
1. To run the unit tests and create a code coverage report, execute the following command in a terminal:

   `npm run coverage`
   
   or
   
   `yarn run coverage`
   
1. To view the generated coverage report, execute the following command in a terminal:

	`npm run coverage:view`
	
	or
	
	`yarn run coverage:view`



## Abstract (Problem Statement) ##

Code a set of classes that represent a deck of poker-style playing cards. (Fifty-two playing cards in four suits: hearts, spades, clubs, diamonds, with face values of Ace, 2-10, Jack, Queen, and King.)

Within one of your classes, you must provide t​wo o​perations:

1. shuffle() Shuffle returns no value, but results in the cards in the deck being
randomly permuted.  Please ​do not ​use library - provided "shuffle" operations to implement this function. You may use library provided random number generators in your solution if needed.
2. dealOneCard() This function should return one card from the deck to the caller. Specifically, a call to shuffle followed by 52 calls to dealOneCard() should result in the caller being provided all 52 cards of the deck in a random order. If the caller then makes a 53rd call dealOneCard(), no card is dealt.

Many details of the problem have been left intentionally vague.

Follow the principle of least surprise in making reasonable decisions regarding the implementation.  While this is a trivial assignment, pretend that this code will become a foundational part of a new product.  ​Take whatever measures you feel are required for your code to meet this bar.

## Implementation Plan ##

1. Create an empty class.
1. Create a unit test for that class.
1. Create an unimplemented member of the class.
1. Create a unit test for that member.
1. Repeat for all members and classes.

## Specifics ##

See [NOTES.md](NOTES.md)
