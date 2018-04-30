//PROMPT
// Given a binary tree, return the inorder traversal of its nodes' values.
//
// Example:
//
// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
//
// Output: [1,3,2]
// Follow up: Recursive solution is trivial, could you do it iteratively?

//OBSERVATIONS
//Had to create second function to store values to array.
//Possible to return array without helper function?

//RECURSIVE SOLUTION
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (root === null) {
      return [];
  }
  var numbers = [];
  inorderPush(root, numbers);
  return numbers;
};

var inorderPush = function(root, arr) {
  if (root === null) {
    return;
  }
  if (root.left !== null) {
    inorderPush(root.left, arr);
  }
  arr.push(root.val);
  if (root.right !== null) {
    inorderPush(root.right, arr);
  }
};

//ITERATIVE SOLUTION
//  1. Create a nodeStack with root as first element
//  2.Set a node to root
//  While nodeStack is not empty:
//    ***Iterate to left most node while pushing onto nodeStack ***
//    I. While node.left does not equal null
//      A. Set node to node.left
//      B. Push node to nodeStack
//
//    *** Once left most point has been reached, process last element of nodeStack ***
//    *** To prevent reprocessing data, we use a seperate variable to keep track of data (dataNode)
//    II. Set dataNode to popped nodeStack.
//    III. Process data (in this case, push value onto array)
//
//    *** If right subtree of dataNode exists, push it to nodeStack for processing ***
//    *** Also, if left subtree of dataNode exists, set node equal to dataNode.left in order to process left sub-tree(s) of right sub-tree
//    IV. Push dataNode.right to nodeStack
//    V. Set node to dataNode.left
var inorderTraversal = function(root) {
  if (root === null || typeof root === undefined) {
    return [];
  }

  var nodeStack = [root]
  var node = root;
  var numbers = [];
  var dataNode;

  while (nodeStack.length !== 0) {
    while(node.left !== null) {
      node = node.left;
      nodeStack.push(node);
    }

    dataNode = nodeStack.pop();
    numbers.push(dataNode.val);

    if (dataNode.right !== null) {
      nodeStack.push(dataNode.right);
      node = dataNode.right;
    }
  }

  return numbers;
};
