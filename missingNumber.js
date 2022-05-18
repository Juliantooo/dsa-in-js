function missingNumbers(arr, brr) {
    // Write your code here
    let start = 0;
    let resultArr = {};
    let resultBrr = {};

    while (start < brr.length) {
        if (arr[start]) {
            resultArr[arr[start]] = resultArr[arr[start]] ? resultArr[arr[start]] + 1 : 1;
        }
        resultBrr[brr[start]] = resultBrr[brr[start]] ? resultBrr[brr[start]] + 1 : 1;
        start++
    }

    let res = []
    Object.keys(resultBrr).forEach((key) => {
        if (resultArr[key] !== resultBrr[key]) {
            let diferent = resultArr[key] ? resultBrr[key] - resultArr[key] : resultBrr[key]
            for (let i = 0; i < diferent; i++) {
                res.push(key)
            }
        }
    })

    return res
}

const arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206]
const brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]

console.log(missingNumbers(arr, brr))