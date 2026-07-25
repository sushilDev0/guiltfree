
// function twoSum( nums,target){

//     if(!nums || nums.length === 0) return;
//     for(let i=0; i<nums.length; i++){
//          for(let j=i+1; j<nums.length; j++){
        
//             if(nums[i] + nums[j] == target){
//                   return true
//             }

//     }

// }
//  return false;
// }

// console.log(twoSum([1,7,2,9,4],13))


var twoSum = function(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in map) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }
};


console.log(twoSum([1,7,2,6,3], 9))