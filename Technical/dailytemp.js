/*

LC 739: Daily Temperatures

temperatures = [73,74,75,71,69,72,76,73]
// Expected: [1,1,4,2,1,1,0,0]


*/


var dailyTemp = function(tempArr){
    if(tempArr.length ===0) return 0;
    let output = new Array(tempArr.length).fill(0);
    for(let i=0; i<tempArr.length; i++){
        for(let j=i+1; j<tempArr.length; j++){
            if(tempArr[j] > tempArr[i]){
                output[i] = j-i;
                break;
            }
        }
    }
    return output;
}   

console.log(dailyTemp([73,74,75,71,69,72,76,73]));


var dailyTempStack = function(tempArr){
    if(tempArr.length === 0) return [];
    let output = new Array(tempArr.length).fill(0);
    let stack = [];

    for(let i=0; i<tempArr.length; i++){
        while(stack.length > 0  && tempArr[i] > tempArr[stack[stack.length - 1]]){
            let index = stack.pop();
            output[index] = i - index;
        }
        stack.push(i);
    }
    return output;
}

console.log(dailyTempStack([73,74,75,71,69,72,76,73]));
