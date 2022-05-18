const sumPair = (arr, target) => {
    let start = 0
    let second = 1
    let count = 0

    while (start != arr.length - 1) {

        if (arr[start] + arr[second] === target || (arr[start] + arr[second]) % target === 0) {
            count++
        }

        if (second < arr.length - 1) {
            second++
        } else {
            start++
            second = start + 1
        }
    }

    return count

}

const arr = [1, 3, 2, 6, 1, 2, 2]
console.log(sumPair(arr, 3))