/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 /**
  * Runtime: 120 ms, faster than 98.03% of JavaScript online submissions for Add Two Numbers.
  * Memory Usage: 46.1 MB, less than 10.11% of JavaScript online submissions for Add Two Numbers.
  */
var addTwoNumbers = function(l1, l2) {
    function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
    
    //Find Max length
    var count1 = 0;
    let listCount1 = l1;
    while(listCount1) {
        count1++;
        listCount1 = listCount1.next;
    }
    var count2 = 0;
    let listCount2 = l2;
    while(listCount2) {
        count2++;
        listCount2 = listCount2.next;
    }
    var maxLength = (count1 > count2) ? count1:count2;
    
    //Set up list for first run
    let list1 = l1;
    let list2 = l2;
    var adder = 0;
    var combinedValue = 0;
    
    value1 = list1?.val ?? 0;
    value2 = list2?.val ?? 0;
    combinedValue = value1 + value2 + adder;
    adder = 0;
    while(combinedValue >= 10){
        combinedValue = combinedValue -10;
        adder++;
    }
    let finalList = new ListNode(combinedValue);
    let selectedNode = finalList;
    if (list1 != null) list1 = list1.next;
    if (list2 != null) list2 = list2.next;
    if (0 == maxLength - 1 && adder > 0) {
            selectedNode.next = new ListNode(adder);
            selectedNode = selectedNode.next;
    }
    
    //Add to list for additional runs
    for (i = 1; i<maxLength; i++){
        combinedValue = 0;
        value1 = list1?.val ?? 0;
        value2 = list2?.val ?? 0;
        combinedValue = value1 + value2 + adder;
        adder = 0;
        while(combinedValue >= 10){
            combinedValue = combinedValue -10;
            adder++;
        }

        selectedNode.next = new ListNode(combinedValue);
        selectedNode = selectedNode.next;
        
        
        if (list1 != null) list1 = list1.next;
        if (list2 != null) list2 = list2.next;
        if (i == maxLength - 1 && adder > 0){
            selectedNode.next = new ListNode(adder);
            selectedNode = selectedNode.next;
        }
    }
    
    return finalList;

};