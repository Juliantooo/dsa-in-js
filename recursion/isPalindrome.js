
function isPalindrome(string){
    // add whatever parameters you deem necessary - good luck!
  if(string.length===1) return true
  if(string.length===2) return string[0]===string[string.length-1]
  if(string[0]===string[string.length-1]) return isPalindrome(string.slice(1,-1))
  return false
    
}
console.log(isPalindrome('awesome'))// false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
// isPalindrome('amanaplanacanalpandemonium') // false