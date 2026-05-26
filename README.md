# string-formatter-js

Tiny zero-dependency string utility library.

## Installation

```bash
npm install string-formatter-js
```

## Quick Reference

| Function             | Example                                          | Output          |
| -------------------- | ------------------------------------------------ | --------------- |
| `truncate`           | `truncate("Hello world", 5)`                     | `"Hello..."`    |
| `camelCase`          | `camelCase("hello world")`                       | `"helloWorld"`  |
| `snakeCase`          | `snakeCase("hello world")`                       | `"hello_world"` |
| `removeSpecialChars` | `removeSpecialChars("he@llo!")`                  | `"hello"`       |
| `isPalindrome`       | `isPalindrome("madam")`                          | `true`          |
| `pascalCase`         | `pascalCase("hello world")`                      | `"HelloWorld"`  |
| `constantCase`       | `constantCase("hello world")`                    | `"HELLO_WORLD"` |
| `isEmail`            | `isEmail("test@mail.com")`                       | `true`          |
| `isURL`              | `isURL("https://example.com")`                   | `true`          |
| `isUUID`             | `isUUID("123e4567-e89b-12d3-a456-426614174000")` | `true`          |
| `isAlpha`            | `isAlpha("abc")`                                 | `true`          |
| `isNumeric`          | `isNumeric("123")`                               | `true`          |
| `repeat`             | `repeat("ha", 3)`                                | `"hahaha"`      |
| `replaceAll`         | `replaceAll("a-b-c", "-", "_")`                  | `"a_b_c"`       |
| `removeWhitespace`   | `removeWhitespace("a b c")`                      | `"abc"`         |
| `mask`               | `mask("1234567890", 6)`                          | `"******7890"`  |
| `wordCount`          | `wordCount("Hello world")`                       | `2`             |
| `initials`           | `initials("John Doe")`                           | `"JD"`          |

## Usage

```ts
import {
    camelCase,
    constantCase,
    initials,
    isAlpha,
    isEmail,
    isNumeric,
    isPalindrome,
    isURL,
    isUUID,
    mask,
    pascalCase,
    removeSpecialChars,
    removeWhitespace,
    repeat,
    replaceAll,
    snakeCase,
    truncate,
    wordCount
} from "string-formatter-js"

truncate("Hello world", 5) // "Hello..."
camelCase("hello world") // "helloWorld"
snakeCase("hello world") // "hello_world"
removeSpecialChars("he@llo!") // "hello"
isPalindrome("madam") // true
pascalCase("hello world") // "HelloWorld"
constantCase("hello world") // "HELLO_WORLD"
isEmail("test@mail.com") // true
isURL("https://example.com") // true
isUUID("123e4567-e89b-12d3-a456-426614174000") // true
isAlpha("abc") // true
isNumeric("123") // true
repeat("ha", 3) // "hahaha"
replaceAll("a-b-c", "-", "_") // "a_b_c"
removeWhitespace("a b c") // "abc"
mask("1234567890", 6) // "******7890"
wordCount("Hello world") // 2
initials("John Doe") // "JD"
```

## Chain API

```ts
import { str } from "string-formatter-js"

str("hello world").pascalCase().value()
// "HelloWorld"

str("test@mail.com").isEmail()
// true
```
