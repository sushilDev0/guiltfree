/*
nums = [1,1,1,2,2,3], k = 2
// output: [1,2]
// 1 appears 3 times, 2 appears 2 times → top 2

nums = [1], k = 1
// output: [1]


 Top k frequent elements
*/

var topKFrequent = function (nums, k) {
    if (nums.length < 2) return nums;

    const map = new Map();

    // Count frequencies
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const entries = Array.from(map.entries());
    entries.sort((a, b) => b[1] - a[1]);
    const result = entries.slice(0, k).map(entry => entry[0]);

    return result


};

console.log(topKFrequent([1, 1, 2, 2, 3], 2))