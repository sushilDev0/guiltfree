/*
LC 104 — Maximum Depth of Binary Tree
tree = [3,9,20,null,null,15,7]
//        3
//       / \
//      9  20
//        /  \
//       15   7
// output: 3

tree = [1,null,2]
// output: 2

*/



var maxDepth = function(root) {
    if(root === null) return 0;
    
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
}


console.log(maxDepth([2,9,20,null,null,15,7]))