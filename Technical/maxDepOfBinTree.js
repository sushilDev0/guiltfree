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

// TreeNode class — LeetCode builds this automatically
// but we need it manually for local testing
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// helper to build tree from array (like LeetCode does)
function buildTree(arr) {
  if (!arr || arr.length === 0) return null;
  
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();

    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }

  return root;
}

var maxDepth = function(root) {
    if(root === null) return 0;
    
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
}


console.log(maxDepth(buildTree([2,9,20,null,null,15,7])))