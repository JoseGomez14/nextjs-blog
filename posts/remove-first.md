---
title: "Remove first character from a string in JavaScript"
date: '2021-07-27'
description: Instructions for removing the first character from a string in JavaScript in different ways
knock: true
tags:
  -javascript
---

**Strings are primitive types in JavaScript** and are therefore immutable. This means that they cannot be modified so to make a change to a string you actually **have to create a new string.**

To remove the first character from a string in JavaScript, there are two ways:

## 1. Using the `slice()` method

The best method to **get one string derived from another in JavaScript** is `slice`. This method **receives two parameters** indicating the start position and the end position of the text string to be extracted.

The interesting thing is that **you can use indices with negative values** to indicate values ​​relative to the end of the text string.

```javascript
const str = '*banana_'
const newStr = str.slice(1, -1)
console.log(newStr) // banana
```

On the other hand, if you only want to remove the first character from a string, you would only need to use the first parameter, since it will understand that you want to retrieve the rest of the string.

```javascript
const str = '_midudev'
const newStr = str.slice(1)
console.log(newStr) // 'midudev'
```

## 2. Using the `substring()` method

As the name suggests, this method allows us to **retrieve a substring of a string**. To do this, it receives two parameters that will be the beginning and the end of the substring that we want to retrieve.

```javascript
const str = '*banana_'
const newStr = str.substring(1, str.length - 1)
console.log(newStr) // banana
```

Note that we must save the result of the `substring` operation in a new variable, since the original string is not modified.

Now, to remove the first character, what we can do is simply use the first parameter, indicating that we want to retrieve the entire string but starting at position 1 of the string:

```javascript
const str = '_midudev'
const newStr = str.substring(1)
console.log(newStr) // 'midudev'
```

## What is the difference between `slice` and `substring`?

The difference is that `slice` allows you to use relative negative indices with respect to the end of the *string* while `substring` does not. The difference is subtle but actually makes `slice` more interesting, as it is more complete and easier to understand.

## Don't use `substr()`

Please don't use the `substr()` method. Although it still works, **its use is deprecated** and it is recommended that you use one of the two alternatives mentioned above.