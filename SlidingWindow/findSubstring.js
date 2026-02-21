// You are given a string s and an array of strings words. All the strings of words are of the same length.

// A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

// For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any permutation of words.
// Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order.

 

// Example 1:

// Input: s = "barfoothefoobarman", words = ["foo","bar"]

// Output: [0,9]

// Explanation:

// The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
// The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

// Example 2:

// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]

// Output: []

// Explanation:

// There is no concatenated substring.

// Example 3:

// Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]

// Output: [6,9,12]

// Explanation:

// The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"].
// The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"].
// The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"].

 

// Constraints:

// 1 <= s.length <= 104
// 1 <= words.length <= 5000
// 1 <= words[i].length <= 30
// s and words[i] consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function(s, words) {
    // What's the invariant ?. The invariant is that for each window(string) we should have any valid permutation of the words array
    // Is the window fixed or expanding ?. The window is always fixed with all the elements within the words array in any order
    // What's the window start ? 0 which will be incremented as we move through the string s
    // What's the window end ? length of the entire words array.
    let windowStart = 0;
    let size = words[0].length
    let windowSize = words.length * size
    let answer = []
    const sortedWords = words.toSorted((a, b) => a.localeCompare(b)).join(",")
    for(let i = 0; i<s.length; i++){
        let windowState = s.substring(windowStart, i+windowSize)
        if(windowState.length < windowSize) break;
        let newWindowStateArray = []
        for(let j = 0; j<windowState.length; j+=size){
            newWindowStateArray.push(windowState.substring(j, j+size))
        }
        // validating the window based of the variant
        let sortedWindowState =  newWindowStateArray.toSorted((a,b)=> a.localeCompare(b)).join(",")
        if(sortedWindowState === sortedWords) {
            answer.push(windowStart)
        }
        windowStart++
    }

    return answer

};

console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"]))