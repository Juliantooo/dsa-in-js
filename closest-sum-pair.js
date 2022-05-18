
const closestSumPair = (arr, num) => {
    let start = 0;
    let end = arr.length - 1;
    let closestPairDifferent = Infinity;
    let pair = []

    while (start < end) {
        let sumPair = arr[start] + arr[end];
        if (Math.abs(sumPair - num) < closestPairDifferent) {
            closestPairDifferent = Math.min(Math.abs(sumPair - num));
            pair[0] = arr[start]
            pair[1] = arr[end]
        }
        if (sumPair > num) {
            end--
        } else {
            start++
        }
    }
    return pair
}

const arr = [1, 3, 4, 7, 10]

console.log(closestSumPair(arr, 9))