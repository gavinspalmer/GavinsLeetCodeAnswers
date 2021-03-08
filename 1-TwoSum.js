/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++){
        for (var j = 1; j < nums.length; j++){
            if (j==i){
                continue;
            }
            if(nums[i] + nums[j] == target) {
                var number = new Array(i, j);
                return number;
            }
        }
        
    }
};