
function maxSubArraySum(nums) {
    if (!nums || nums.length === 0) return 0;
    let current = nums[0];
    let sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        current = Math.max(nums[i], current + nums[i]);
        sum = Math.max(sum, current);

    }

    return sum
}



console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4], 6))