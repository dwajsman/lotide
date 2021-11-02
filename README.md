# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dwajsman/lotide`

**Require it:**

`const _ = require('@dwajsman/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

*`function assertArraysEqual(arr1, arr2)`:  Asserts if Arrays are equal 
*`function assertEqual(var1, var2)`: Asserts if variables are equal  
*`function assertObjectsEqual(obj1, obj2)`:  Asserts if Objects are equal 
*`function countLetters(str)`:  Counts letters in a string
*`function eqArrays(arr1, arr2)`:  Compares if Arrays are equal 
*`function eqObjects(obj1, obj2)`:  Compares if Objects are equal 
*`function findKey(obj, key)`:  Returns key with Object containing Object
*`function findKeyByValue(obj, val)`:  Returns key with object containg string or number
*`function head(arr)`:  Returns arr[0]
*`function letterPositions(var, letter)`:  Finds position of first of kind of letter in string
*`function map(arr, callback)`:  Will return result of callback function applied to array 
*`function middle(arr)`:  Return value of middle number or numbers of array 
*`function tail(arr)`:  Returns array excluding first item 
*`function takeUntil(arr, callback)`:  Returns array excluding your choice of items from the beginning using a callback function
*`function without(arr1, arr2)`:  Removes items from first Arr that exist in the Second Arr