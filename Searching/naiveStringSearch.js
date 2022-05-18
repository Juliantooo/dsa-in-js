// create function that recive 2 params, one is string and another is string pattern that searched

// const navieStringSearch = (string, pattern) => {
//     var count = 0;
//     for (var i = 0; i < string.length; i++) {
//         for (var j = 0; j < pattern.length; j++) {
//             if (pattern[j] !== string[i + j]) break;
//             if (j === pattern.length - 1) count++;
//         }
//     }
//     return count;
// }

const navieStringSearch = (string, pattern) => {
    let indexRes = []
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if (indexRes.length === pattern.length) break
            if (string[i] === pattern[j]) {
                indexRes.push(i)
                let startString = i + 1
                let startPattern = j + 1
                while (indexRes.length < pattern.length && startString < string.length) {
                    if (string[startString] === pattern[startPattern]) {
                        indexRes.push(startString)
                        startString += 1
                        startPattern += 1
                    } else {
                        break
                    }
                }
                if (indexRes.length !== pattern.length) indexRes = []
            }
        }
    }
    return indexRes
}

console.log(navieStringSearch('lorie loled magfalana', 'lol'))
