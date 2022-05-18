
const maxSubArraySum = (arr, num) => {
    if (arr.length < 1 || arr.length < num) return null
    let maxSum = 0
    let tempSum = 0

    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }

    tempSum = maxSum

    for (let j = num; j < arr.length; j++) {
        tempSum = tempSum - arr[j - num] + arr[j]
        if (tempSum > maxSum) {
            maxSum = tempSum
        }
    }
    return maxSum
}

const arr = [1, 4, 2, 10, 23, 3, 1, 0, 20]
console.log(maxSubArraySum(arr, 4))