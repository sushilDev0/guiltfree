/*
LC 153 — Find Minimum in Rotated Sorted Array


nums = [3,4,5,1,2]
// output: 1

nums = [4,5,6,7,0,1,2]
// output: 0

nums = [11,13,15,17]
// output: 11 (not rotated, min is first element)

*/

var minInRotSortArr = function(nums){
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;       // Minimum is strictly to the right
        } else if (nums[mid] < nums[right]) {
            right = mid;          // Minimum is mid or to the left
        } else {
            right--;              // Shrink window safely when duplicates match
        }
    }

    return nums[left];
}


console.log(minInRotSortArr([3,4,5,1,2])); // 1