/*
Given an integer array nums (0-indexed) and two integers target and start, find an index i such that nums[i] == target and abs(i - start) is minimized. Note that abs(x) is the absolute value of x.

Return abs(i - start).

It is guaranteed that target exists in nums.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
/*
Runtime: 80 ms, faster than 100.00% of JavaScript online submissions for Minimum Distance to the Target Element.
Memory Usage: 38.6 MB, less than 100.00% of JavaScript online submissions for Minimum Distance to the Target Element.
*/
 var getMinDistance = function(nums, target, start) {
    
    if (nums.indexOf(target,start) < 0){
        return Math.abs(start-nums.lastIndexOf(target,start));
    }
    else if (nums.lastIndexOf(target,3) < 0){
        return Math.abs(start-nums.indexOf(target,start));
    }
    else if (Math.abs(start-nums.indexOf(target,start)) <= Math.abs(start-nums.lastIndexOf(target,3))) {
        return Math.abs(start-nums.indexOf(target,start));
    }
    else {
        
        return Math.abs(start-nums.lastIndexOf(target,start));
    }
};