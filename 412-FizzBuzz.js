/**
 * https://leetcode.com/problems/fizz-buzz/
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var fizzBuzzString = new Array();
    for (i=1; i <=n; i++){
        if (i%3 == 0 && i%5 == 0) {
            fizzBuzzString.push("FizzBuzz");
        }
        else if (i%3 == 0) {
            fizzBuzzString.push("Fizz");
        }
        else if (i%5 == 0) {
            fizzBuzzString.push("Buzz");
        }
        else {
            fizzBuzzString.push(i.toString());
        }
    }
    return fizzBuzzString;
};