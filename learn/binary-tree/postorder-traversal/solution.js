//PROMPT
// Given a binary tree, return the inorder traversal of its nodes' values.
//
// Given a binary tree, return the postorder traversal of its nodes' values.
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
// Output: [3,2,1]
// Follow up: Recursive solution is trivial, could you do it iteratively?

//OBSERVATIONS
//Had to create second function to store values to array in recusive solution.
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
var postorderTraversal = function(root) {
  if(root === null || typeof root === undefined) {
    return [];
  }

  var numbers = [];

  postorderPush(root, numbers);

  return numbers;
};

var postorderPush = function(root, arr) {
  if (root === null || typeof root === undefined) {
    return;
  }
  postorderPush(root.left, arr);
  postorderPush(root.right, arr);
  arr.push(root.val);
};
