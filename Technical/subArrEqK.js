// LC 560 — Subarray Sum Equals K

/*
nums = [1, 1, 1], k = 2
// output: 2
// subarrays: [1,1] at index 0-1 and [1,1] at index 1-2

nums = [1, 2, 3], k = 3
// output: 2
// subarrays: [3] and [1,2]
*/

var sumArrraySum = function(nums,k){
    if(!nums || nums.length === 0) return 0;

    let prefix = 0;
    let count = 0;
    let map = {0:1};

    for(const num of nums){
        prefix +=num;
        if(map[prefix-k]!== undefined){
            count+= map[prefix-k];
        }
        map[prefix] = (map[prefix] || 0) + 1;
    }

    return count;
}


let nums = [1,2,3]
let k = 3
console.log(sumArrraySum(nums,k))