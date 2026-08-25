/*

LC 33 — Search in Rotated Sorted Array

nums = [4,5,6,7,0,1,2], target = 0
// output: 4 (index of 0)

nums = [4,5,6,7,0,1,2], target = 3
// output: -1 (not found)

nums = [1], target = 0
// output: -1

*/


var searchInSortedArr = function(nums, target){
    let left = 0;
    let right =  nums.length-1;

    while(left <= right){

        let mid = Math.floor((left +right)/2);

        if(nums[mid] === target)return mid;

        if(nums[left] <= nums[mid]){
            if(target >= nums[left] && target < nums[mid]){
                right = mid -1;
            }
            else{
                left = mid +1;
            }
        }
        else{
            if(target > nums[mid] && target <= nums[right]){
                left = mid +1;
            }
            else{
                right = mid -1;
            }
        }
    }

    return -1;
}

console.log(searchInSortedArr([4,5,6,7,0,1,2], 0)); // 4
console.log(searchInSortedArr([4,5,6,7,0,1,2], 3)); // -1
console.log(searchInSortedArr([1], 0));
