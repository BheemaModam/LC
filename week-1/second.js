/*
*2. Valid Parentheses

*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

*An input string is valid if:

*    Open brackets must be closed by the same type of brackets.
*    Open brackets must be closed in the correct order.
*    Every close bracket has a corresponding open bracket of the same type.
------------------------------------------------------------>
*Example 1:
*Input: s = "()"
*Output: true

*Example 2:
*Input: s = "()[]{}"
*Output: true

*Example 3:
*Input: s = "(]"
*Output: false

*Example 4:
*Input: s = "([])"
*Output: true

*Example 5:
*Input: s = "([)]"
*Output: false

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  console.log("input", s);
  let brackets = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "{") {
      brackets.push("}");
    } else if (s[i] == "[") {
      brackets.push("]");
    } else if (s[i] == "(") {
      brackets.push(")");
    } else if (brackets.pop() !== s[i]) {
      return false;
    }
  }
  return !brackets.length;
};

const example1 = isValid("()");
const example2 = isValid("()[]{}");
const example3 = isValid("(]");
const example4 = isValid("([])");
console.log("Example1", example1);
console.log("Example2", example2);
console.log("Example3", example3);
console.log("Example4", example4);
