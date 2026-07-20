// LC 238 — Product of Array Except Self

// nums = [1, 2, 3, 4]
// output: [24, 12, 8, 6]


function prodAExceptSelf(nums) {

    if (nums.length === 0) return;

    let leftProducts = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {

        leftProducts[i] = leftProducts[i - 1] * nums[i - 1]
            console.log(leftProducts)

    }
    console.log(leftProducts)

    let rightProducts = new Array(nums.length).fill(1);

    for (let i = nums.length - 2; i >= 0; i--) {

        rightProducts[i] = rightProducts[i + 1] * nums[i + 1]
            console.log(rightProducts)

    }
    console.log(rightProducts)
  const result = leftProducts.map((num,index)=> num * rightProducts[index])
  return result
}

console.log(prodAExceptSelf([1, 2, 3, 4]))