// helper to get digit number

const getDigit = (nums, place) => {
    // const number = nums.toString().split('').reverse()[place]
    // return parseInt(number)
    return Math.floor(Math.abs(nums) / Math.pow(10, place)) % 10 //good ver
}

const digitCount = (nums) => {
    return nums.toString().length
}

const mostDigit = (numsArr) => {
    let maxDigit = 0
    for (let i = 0; i < numsArr.length; i++) {
        maxDigit = Math.max(maxDigit, digitCount(numsArr[i]))
    }
    return maxDigit
}

const radixSort = (arr) => {
    const maxDigit = mostDigit(arr)

    for (let i = 0; i < maxDigit; i++) {
        const buckets = Array.from({ length: 10 }, () => [])
        for (let j = 0; j < arr.length; j++) {
            const digit = getDigit(arr[j], i)
            buckets[digit].push(arr[j])
        }
        arr = [].concat(...buckets)
    }
    return arr
}

console.log(radixSort([1, 23, 124, 515, 234, 4623, 213, 6, 12, 1245, 35, 12, 243, 4]))