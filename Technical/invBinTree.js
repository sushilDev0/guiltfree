/*
LC 226 Invert a binary tree.
*/


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var invertTreee = function(root){
    if(!root ) return  null;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    invertTreee(root.left);
    invertTreee(root.right);

    return root;
}

let invertedRoot = invertTreee(new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9))));


console.log(invertedRoot);