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
const lengthOfLongestSubstring = function(s) {
    if(!s) return 0
    const fullArray = [...s]
    const arrayOfArrays = []
    let subArray = new Set()
    fullArray.forEach((el)=>{
        if(subArray.has(el)){
            arrayOfArrays.push(subArray)
            subArray = new Set()
            subArray.add(el)
     
        } else {
            subArray.add(el)
        }

    })
    if(subArray.size) arrayOfArrays.push(subArray)
    return Math.max(...arrayOfArrays.map(subArray => ([...subArray]).length))
    
};


console.log(lengthOfLongestSubstring("dvdf"))
