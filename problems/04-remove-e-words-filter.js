/*
Write a function `removeEWords(sentence)` that accepts a sentence string as an
arg. The function should return a new string, containing only the words that
don't have the letter "e" in them.

Solve this using Array's `filter()` method.

Examples:

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

1. change string into array
2. iterate through each word to find letter 'e'
3. remove that word
4. return words without e
*/

let removeEWords = function(sentence) {
  let newSen = sentence.split(" ");
  let arr = [];
  newSen.filter((word) => {
    if (!word.toLowerCase().includes("e")) {
      arr.push(word);
    }
  })
  return arr.join(" ");
};

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = removeEWords;
} catch (e) {
  module.exports = null;
}
