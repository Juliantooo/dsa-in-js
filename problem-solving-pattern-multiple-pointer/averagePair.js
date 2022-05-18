
const averagePair = (arr, targetAverage) => {
    if (arr.length === 0) return false

    let start = 0
    let end = arr.length - 1

    while (start !== end) {
        let average = (arr[start] + arr[end]) / 2
        if (average === targetAverage) return true

        if (average > targetAverage) {
            end -= 1
        } else {
            start += 1
        }
    }

    return false
}

const arr = [1, 3, 3, 5, 6, 7, 10, 12, 19, 20]
console.log(averagePair(arr, 8))