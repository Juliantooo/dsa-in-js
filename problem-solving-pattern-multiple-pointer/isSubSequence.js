// create function that recive 2 params, one is string, and another is string that is contain in first params
// but must in order
// ex : abcdef, abc => true , abcdefg,acbdef => false not in order


// multiple pointer approach

const isSubSequence = (stringKey, string) => {

    if (stringKey.length === 0) return true

    let i = 0
    let j = 0

    while (j < string.length) {
        if (stringKey[i] === string[j]) i++
        if (i === stringKey.length) return true
        j++
    }
    return false
}

// my way
// const isSubSequence = (stringKey, string,) => {

//     const arrStringKey = stringKey.split('')
//     const res = []

//     for (let i = 0; i < arrStringKey.length; i++) {
//         // find index chara of string key [i] in string
//         const index = string.indexOf(arrStringKey[i])
//         if (index !== -1) {
//             // add chara in string that found in res array with index char in string
//             res[index] = string[index]
//         }
//     }

//     if (stringKey === res.join('')) {
//         return true
//     }
//     return false
// }

// Reccursive way

// const isSubSequence = (stringKey, string) => {
//     if (!stringKey) return true
//     if (!string) return false

//     if (stringKey[0] === string[0]) return isSubSequence(stringKey.slice(1), string.slice(1))
//     return isSubSequence(stringKey, string.slice(1))
// }


console.log(isSubSequence('abc', 'aabcbedwa'))