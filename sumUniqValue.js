
// const sumUniqeValue = (arr) => {
//     let sum = 0

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== arr[i + 1]) {
//             sum += arr[i]
//         }
//     }

//     return sum
// }

function sumUniqeValue(arr) {
    if (arr.length === 0) return 0;
    var i = 0;
    let sum = 0
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i = j
            sum += arr[i]
        }
    }
    return sum += arr[0]
    // return i+1 => count
}

console.log(sumUniqeValue([1, 1, 2, 2, 8, 8, 8, 8, 9, 10,]))


// console.log(countUniqueValues([1, 1, 1, 1, 1, 2,]))