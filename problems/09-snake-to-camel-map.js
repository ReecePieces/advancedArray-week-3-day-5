/*
Write a function `snakeToCamel` that takes in a snake_cased string and returns a
PascalCased version of the string. snake_case is where each word is separated
with underscores(`_`). PascalCase is a string where the first char of each word
is capital, all other chars lowercase.

Solve this using `array.map()`.

Examples:
convert str to array after replacing underscore with space
iterate through array each word
captialize at index of zero
return string with no spaces
*/

function snakeToCamel(str) {
    let newArr = str.split('_');
    let arr = []
    newArr.map((word) => {
        let firstLetter = word[0].toUpperCase()
        let restOfWord = word.slice(1).toLowerCase()
        let newStr = firstLetter + restOfWord
        arr.push(newStr)

    })

    return arr.join("")
}

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = snakeToCamel;
} catch (e) {
    module.exports = null;
}
