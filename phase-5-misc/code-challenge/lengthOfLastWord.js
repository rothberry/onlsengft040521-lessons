/**
 * @param {string} s
 * @return {number}
 * Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

 */
const lengthOfLastWord = function (s) {
  // O(N)
  // Given a string, find the last word.

  // Create array out off words
  const words = s.split(" ")
  let i = 1
  // Loop from the end, until we find the last word
  while (i < words.length + 1) {
    console.log(words[words.length - i])
    if (words[words.length - i].length > 0) {
      return words[words.length - i].length
    }
    i++
  }
  // If no words, then return false
  return 0
}

let s = "Hello World"
console.log(lengthOfLastWord(s) === 5)
// Output: 5
s = "   fly me   to   the moon  "
console.log(lengthOfLastWord(s) === 4)
// Output: 4
s = "luffy is still joyboy"
console.log(lengthOfLastWord(s) === 6)
// Output: 6
s = "a"
console.log(lengthOfLastWord(s))
