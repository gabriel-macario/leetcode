// PROMPT
// Given a binary tree, return the preorder traversal of its nodes' values.
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
// Output: [1,2,3]
// Follow up: Recursive solution is trivial, could you do it iteratively?

//OBSERVATIONS
// Had to create a helper function to store values into array when traversing recursively.
// Is there a way to do this without a helper function?

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

 var preorderTraversal = function(root) {
     var numbers = [];
     preorderPush(root, numbers);
     return numbers;
 };

 var preorderPush = function(root, arr) {
     if (root === null) {
         return;
     } else {
         arr.push(root.val);
         preorderPush(root.left, arr);
         preorderPush(root.right, arr);
     }
 }

//ITERATIVE SOLUTION
//Make a nodeStack, push first node on to stack.
//While nodeStack is not empty:
//  1. Pop nodeStack;
//  2. Process data of popped node (push to array in this case)
//  3. Push right, then left nodes of popped nodes
//    -Right then left since left will get popped first. This ensure preorder traversal.

var preorderTraversal = function(root) {

    var nodeStack = [];
    var numbers = [];

    //Checks for undefined // null case
    if (root === undefined || root === null) {
        return numbers;
    }

    var node = root;



    nodeStack.push(node);

    while(nodeStack.length !== 0) {
        console.log(nodeStack.length);
        node = nodeStack.pop();

        numbers.push(node.val);

        if (node.right !== null) {
            nodeStack.push(node.right);
        }

        if (node.left !== null) {
            nodeStack.push(node.left);
        }
    }

    console.log(nodeStack.length);

    return numbers;
};
