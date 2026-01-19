const factorial1 = (n)=> {
    if(n<0) throw new Error("Invalid input")
    if( n=== 0) return 1
    return n * factorial1(n-1)
}

console.log("factorial1(5)",factorial1(5))

const factorial2 = (n) => {
     if(n<0) throw new Error("Invalid input")
    let result = 1
    for(let i=2; i<=n; i++) {
        result *= i
    }
   return result   
}

console.log("factorial2(5)",factorial2(4))



const permutation1 = (n,r)=>{
    return factorial1(n) / factorial1(n-r)
}

console.log("permutation1(5,1)",permutation1(5,1))



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

// Steps :
// 1. permutate the Array
// 2. Combine the permutated array into substrings
// 3.Search for the substrings from the string s and get the indexes
// 4.Return the indexes of the substrings 


/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
      
};

console.log(findSubstring("abcdef", ["a","b","c","d","e", "f"]))