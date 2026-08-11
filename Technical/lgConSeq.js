/**
 * LC 128 Longest consequtive Sequence
 * 
 * 1. Put all numbers in a Set (O(1) lookup)
2. For each number — check if it's a START
(num-1 does NOT exist in set)
3. If it's a start — count how long
the sequence goes (num, num+1, num+2...)
4. Track the longest count
* 
* 
* nums = [100, 4, 200, 1, 3, 2]
// output: 4
// sequence: [1, 2, 3, 4]

nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
// output: 9
// sequence: [0,1,2,3,4,5,6,7,8]
* 

* @param {number[]} nums
* @return {number}
*/



var longestConsecutive = function(nums){
    const dupChecker = new Set(nums);
    let maxLength = 0;
   console.log(dupChecker)
   for(const num of dupChecker){
    if(!dupChecker.has(num-1)){
        let current = num;
        let length = 1;
    while(dupChecker.has(current+1)){
        current++;
        length++
    }
    maxLength = Math.max(maxLength, length)
    }
   } 
return maxLength
}

let nums =[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
console.log(longestConsecutive(nums))