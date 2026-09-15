/*
LC 100 — Same Tree
*/
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function isSameTree(p, q) {

    if(p === null && q === null) return true;
    if(p === null || q === null) return false;
    
    if(p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

}


const treeA = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const treeB = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const treeC = new TreeNode(1, new TreeNode(2), null); // different structure

console.log(isSameTree(treeA, treeB)); // true
console.log(isSameTree(treeA, treeC)); // false