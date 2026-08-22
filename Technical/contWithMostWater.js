/*
Problem:
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container such that the container holds the most water.

Example:

heights = [1,8,6,2,5,4,8,3,7]
Output: 49

*/

var contWithMostWater = function(heights){
    let left = 0;
    let right = heights.length-1;
    let maxArea = 0;
 
    while(left< right){
        let width = right - left;
        let height = Math.min(heights[left], heights[right]);
        let area = width * height;
        maxArea = Math.max(maxArea, area);
         
        if(heights[left] <heights[right]){
            left++;
        }
        else{
            right--;
        }
    }
    return maxArea;
}

let heights = [1,8,6,2,5,4,8,3,7];
console.log(contWithMostWater(heights)); // Output: 49
