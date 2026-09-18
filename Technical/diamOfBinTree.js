/*
LC  543 — Diameter of Binary Tree
*/
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var diameterOfBinaryTree = function(root) {
   let maxDiameter = 0;
     var depth = function(node){
    if(node === null) return 0;
    let leftDepth = depth(node.left);
    let rightDepth = depth(node.right);
    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
    return 1 + Math.max(leftDepth, rightDepth)

}
    depth(root);   
    return maxDiameter;
};


const treeA = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const treeB = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const treeC = new TreeNode(1, new TreeNode(2), null); // different structure

console.log(diameterOfBinaryTree(treeA)); // 2
console.log(diameterOfBinaryTree(treeC)); // 1