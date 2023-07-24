/*

Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

// your code here
// define function
// split string into an array
// iterate thru array
// define longest
// if string.length is larger than next string.length = longest
// compare longest to next string.length
// return longest
*/

let longestWord = function(sentence) {
    let longest = "";

    let strArray = sentence.split(" ")

    strArray.forEach((word) => {

        if (word.length > longest.length) {
            longest = word;
        }
    })

    return longest;
};

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
