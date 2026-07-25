//LC 214 Contains Duplicate
// nums = [1,2,3,1] output: true ( 1 appears twice)
// nums = [1,2,3,4] output: false (all unique)

function containsDuplicate(nums) {
    if (!nums || nums.length === 0) return false;

    const duplicates = [];
    const processed = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (processed.has(nums[i])) continue;  // Skip if already counted
        
        let count = 1;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
        
        if (count > 1) {
            duplicates.push({ number: nums[i], count: count });
            processed.add(nums[i]);
        }
    }

    if (duplicates.length === 0) {
        return "false (all are unique)";
    }
    
    return `true: ${duplicates.map(d => `${d.number} appeared ${d.count} times`).join(", ")}`;
}

console.log(containsDuplicate([1, 2, 3, 4, 4, 4, 3]));
// Output: true: 3 appeared 2 times, 4 appeared 3 times

 


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


