/*
You are given a string word that consists of digits and lowercase English letters.

You will replace every non-digit character with a space. For example, "a123bc34d8ef34" will become " 123  34 8  34". Notice that you are left with some integers that are separated by at least one space: "123", "34", "8", and "34".

Return the number of different integers after performing the replacement operations on word.

Two integers are considered different if their decimal representations without any leading zeros are different.
*/

/**
 * @param {string} word
 * @return {number}
 */
/*
    Runtime: 92 ms, faster than 25.97% of JavaScript online submissions for Number of Different Integers in a String.
    Memory Usage: 41.6 MB, less than 8.22% of JavaScript online submissions for Number of Different Integers in a String.
*/
/*
    Wrong Submissions:
        Infinity numbers
        Numbers leading with a zero (1, 01, 001)
        Numbers that were just 0
        Numbers that had multiple 0's (0, 00)
*/
var numDifferentIntegers = function(word) {
    var testInt = false;
    var numberArray = [];
    var numberString = '';
    
    for (var i = 0; i < word.length; i++) {
        if (isNaN(parseFloat(word.charAt(i)))) {
            //word = word.substring(0,i) + ' ' + word.substring(i+1);
            if (testInt == true) {
                var j = 0;
                var countLeadZero = 0;
                while(numberString.charAt(j) =='0'){
                    if (numberString.charAt(j) == '0') {
                        countLeadZero++;
                    }
                    j++;
                }
                
                if (countLeadZero == numberString.length) {
                    numberString = '0';
                }
                else {
                    numberString = numberString.substring(countLeadZero);
                }
                numberArray.push(numberString);
                numberString = '';
            }
            testInt = false;
        }
        else {           
            testInt = true;
            numberString = numberString + word.charAt(i);
        }
    }
    
    if (testInt == true) {
        var countLeadZero = 0;
        var j = 0;
        while(numberString.charAt(j) =='0'){
            if (numberString.charAt(j) == '0') {
                countLeadZero++;
            }
            j++;
        }

        if (countLeadZero == numberString.length) {
            numberString = '0';
        }
        else {
            numberString = numberString.substring(countLeadZero);
        }
        numberArray.push(numberString);
    }

    numberArray = numberArray.filter((v,i) => numberArray.indexOf(v) == i);

    return numberArray.length;
    
};