// collect all odd number from array of number
const collectOddNumber = (arr) => {
    let result = []

    const helperAddOddNumber = (helperArr) => {
        if (helperArr.length === 0) return;

        if (helperArr[0] % 2 !== 0) {
            result.push(helperArr[0])
        }
        helperAddOddNumber(helperArr.slice(1))
    }
    helperAddOddNumber(arr)
    return result
}

console.log(collectOddNumber([1, 3, 4, 6, 42, 21, 5, 7, 8, 9, 11, 20]))

// next to do = try using pure recursive