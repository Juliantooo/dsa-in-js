
const isAnagram = (string1, string2) => {
    const charsString1 = {}
    const charsString2 = {}

    if (string1.length !== string2.length) {
        return false
    }

    for (let i = 0; i < string1.length; i++) {
        charsString1[string1[i]] = (charsString1[string1[i]] || 0) + 1
    }

    for (let i = 0; i < string2.length; i++) {
        charsString2[string2[i]] = (charsString2[string2[i]] || 0) + 1
    }

    for (key in charsString1) {
        if (charsString1[key] !== charsString2[key]) {
            return false
        }
    }
    return true
}

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('auz', 'zua'))
console.log(isAnagram('anagrama', 'nagaram'))
console.log(isAnagram('fajar', 'jaraf'))
