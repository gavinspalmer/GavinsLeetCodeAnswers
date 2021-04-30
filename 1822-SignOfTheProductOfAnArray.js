/*
There is a function signFunc(x) that returns:

1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.
You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product).
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
/*
Runtime: 84 ms, faster than 34.43% of JavaScript online submissions for Sign of the Product of an Array.
Memory Usage: 39 MB, less than 70.78% of JavaScript online submissions for Sign of the Product of an Array.
*/
 var arraySign = function(nums) {
    var calculatedSum = 1;
    for (var i = 0; i < nums.length; i++){
        calculatedSum = calculatedSum * nums[i];
    }
    
    if (calculatedSum > 0) {
        return 1;
    }
    else if (calculatedSum < 0) {
        return -1;
    }
    else {
        return 0;
    }
};