nums.sort((a, b) => a - b);
  
  const result = [];

  // Step 2: Loop through the array, fixing one number (nums[i]) at a time.
  // We stop at nums.length - 2 because we need at least 3 numbers to form a triplet.
  for (let i = 0; i < nums.length - 2; i++) {

    // Optimization: Since the array is sorted, if the anchor number is > 0,
    // all subsequent numbers are also > 0, making it impossible for three positive numbers to sum to 0.
    if (nums[i] > 0) break;

    // Skip duplicate anchor values to prevent duplicate triplets in the result.
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // Step 3: Initialize two pointers for the remaining sub-array.
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        // Valid triplet found
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for the left and right pointers before moving them
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        // Move both pointers inward to look for other potential pairs
        left++;
        right--;
      } else if (sum < 0) {
        // Sum is too small -> increase sum by moving left pointer to a larger value
        left++;
      } else {
        // Sum is too large -> decrease sum by moving right pointer to a smaller value
        right--;
      }
    }
  }

  return result;