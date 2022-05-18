const areThereDuplicate = (arr) => {
    const result = {}

    for (let i = 0; i < arr.length; i++) {
        result[arr[i]] ? result[arr[i]] += 1 : result[arr[i]] = 1
    }

    const res = Object.values(result).some((item) => item > 1)

    return res
}

// sorthhand use set method
// const areThereDuplicate = (arr) => {
//     return new Set(arr).size !== arr.length;
// }

const arr = [1, 1, 2, 4]

console.log(areThereDuplicate(arr))