/**
 * https://leetcode.com/problems/integer-to-roman/
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var remaining = num;
    var count = 0;
    var romanString = '';
    while (remaining > 0) {
        if (remaining >= 1000) {
            count = Math.floor(remaining/1000);
            remaining = remaining - (count*1000);
            for (var i = 1; i <= count; i++) {
                romanString = romanString + 'M';
            }
            count = 0;
        }
        else if (remaining >= 900) {
            remaining = remaining - 900;
            romanString = romanString + 'CM';
        }
        else if (remaining >= 500) {
            remaining = remaining - 500;
            romanString = romanString + 'D';
        }
        else if (remaining >= 400) {
            remaining = remaining - 400;
            romanString = romanString + 'CD';
        }
        else if (remaining >= 100) {
            count = Math.floor(remaining/100);
            remaining = remaining - (count*100);
            for (var i = 1; i <= count; i++) {
                romanString = romanString + 'C';
            }
            count = 0;
        }
        else if (remaining >= 90) {
            remaining = remaining - 90;
            romanString = romanString + 'XC';
        }
        else if (remaining >= 50) {
            remaining = remaining - 50;
            romanString = romanString + 'L';
        }
        else if (remaining >= 40) {
            remaining = remaining - 40;
            romanString = romanString + 'XL';
        }
        else if (remaining >= 10) {
            count = Math.floor(remaining/10);
            remaining = remaining - (count*10);
            for (var i = 1; i <= count; i++) {
                romanString = romanString + 'X';
            }
            count = 0;
        }
        else if (remaining >= 9) {
            remaining = remaining - 9;
            romanString = romanString + 'IX';
        }
        else if (remaining >= 5) {
            remaining = remaining - 5;
            romanString = romanString + 'V';
        }
        else if (remaining >= 4) {
            remaining = remaining - 4;
            romanString = romanString + 'IV';
        }
        else if (remaining >= 1) {
            remaining = remaining - 1;
            romanString = romanString + 'I';
        }
        else {
            break;
        }
    }
    return romanString;
};