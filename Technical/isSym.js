/*
LC 101 Symmetric Tree,
*/

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}


function isSymmetric(root) {
  if(root === null) return true;
  return isMirror(root.left, root.right);

}


function isMirror(left, right) {

    if(left === null && right === null) return true;
    if(left === null || right === null) return false;
    
    if(left.val !== right.val) return false;

    return isMirror(left.left, right.right) && isMirror(left.right, right.left);

}


const treeA = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const treeB = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const treeC = new TreeNode(1, new TreeNode(2), null); // different structure

console.log(isSymmetric(treeA)); // true
console.log(isSymmetric(treeC)); // false