// function maxSubarraySum(arr, num) {
//   if (num > arr.length) {
//     return null;
//   }
//   var max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }

const maxSubarraySum = (arr, num) => {
  if (arr.length < 1) return null
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

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))


