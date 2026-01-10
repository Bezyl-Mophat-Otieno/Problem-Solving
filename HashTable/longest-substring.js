// Given a string s, find the length of the longest substring without duplicate characters.
// Example 1:
// Input: s = "abcabcbb"

// Output: 3

// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

// Example 2:

 

// Input: s = "bbbbb"

// Output: 1

// Explanation: The answer is "b", with the length of 1.

// Example 3:

 

// Input: s = "pwwkew"

// Output: 3

// Explanation: The answer is "wke", with the length of 3.

// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104

// s consists of English letters, digits, symbols and spaces.
// Brute Force Solution

/**
 * @param {string} 
 * @return {number}
 */
const lengthOfLongestSubstring1 = function(s) {
    if(!s) return 0
    const fullArray = [...s]
    const arrayOfArrays = []
    for(let i = 0; i<fullArray.length;  i++){
    const subArray = new Set()
    subArray.add(fullArray[i])
        for(let j = i+1; j<fullArray.length;  j++){
            if(subArray.has(fullArray[j])){
                break;
            }else {
                subArray.add(fullArray[j])
            }
        }
     if(subArray.size) arrayOfArrays.push(subArray)
    }
    return Math.max(...arrayOfArrays.map(subArray => ([...subArray]).length))
    
};

// Time complexity for this solution is 0(n2) (Quadratic) since for each element we loop through the elements over and over again.
console.log(lengthOfLongestSubstring1("abcabcbb"))

// Optimized solution to atleast 0(n) (Linear)
// First we need to ask ourselves what are we rechecking ?
// Can we laverage storage to avoid repetition ?
// If so what exactly can we store to avoid recchecking ?


/**
 * @param {string} 
 * @return {number}
 */
const lengthOfLongestSubstring2 = function(s) {
    if(!s) return 0;
};

