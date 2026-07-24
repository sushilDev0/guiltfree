//LC 214 Contains Duplicate
// nums = [1,2,3,1] output: true ( 1 appears twice)
// nums = [1,2,3,4] output: false (all unique)

// var containsDuplicate = function(nums){

//     if(nums)
// }




function containsDuplicate(nums) {
    if (!nums || nums.length === 0) return false;

    for (let i = 0; i < nums.length; i++) {
        let count = 1;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;

                return `true  (${nums[i]} appeared ${count} times)`
            }
        }
    }
    return `false ( all are unique)`
}

console.log(containsDuplicate([1, 2, 3, 4, 4, 4, 3]))



var containsDuplicateZ = function (arr) {
    const detected = {};
    for (let i = 0; i < arr.length; i++) {
        if (detected[arr[i]]) {
            return true;
        }
        detected[arr[i]] = true;
    }
    return false;
};


console.log(containsDuplicateZ([1, 2, 3, 4, 4, 4, 3]))


var containsDuplicateX = function (nums) {

    if (!nums || nums.length === 0) return false;

    const seen = new Set();

    for (const num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};


console.log(containsDuplicateX([1, 2, 3, 4, 4, 4, 3]))


