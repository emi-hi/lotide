# Lotide
A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @emihi/lotide`

**Require it:**

`const _ = require('@emihi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual` : console.logs string stating whether input arrays are equal
* `assertEqual`       : console.logs string stating whether primitive inputs are equal
* `assertObjectsEqual`: console.logs string stating whether input objectss are equal
* `countLetters      `: given an array, returns object of letter counts
* `countOnly         `: given an array and an object with keys and true or false, will return counts of items that are in array that are true
* `eqArrays          `: given two arrays, will return true if they are equal, returns false if not
* `eqObjects         `: given two objects, will return true if they are equal, returns false if not
* `findKey           `: given an object and callback, will find value of key
* `findKeyByValue    `: given an object and value, will return key
* `flatten           `: returns a single array, with any internal arrays merged into the main one
* `head              `: returns the first item in array
* `letterPositions   `: returns the positiona at which characters occur in a given string
* `map               `: takes array and callback, returns new array that is a modified version of the original (modified based on function)
* `middle            `: returns middle of array (1 item if length is odd, average of 2 if length is even)
* `tail              `: returns all items in array except the first
* `takeUntil         `: returns all items in an array until a condition is met (ie one of the items equals a specified string)
* `without           `: given a array and a value, returns an array without the specified value