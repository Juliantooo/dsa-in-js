// write a function that recived 2 params array of integer and 1 integer number of target
// find out pair num of arr1 and arr 2 that sum of thoose number equal or closest to target
// pelajari

const closestPair = (arr1, arr2, targetNumber) => {
    const sortedArr1 = arr1.sort((a, b) => a - b)
    const sortedArr2 = arr2.sort((a, b) => a - b)

    let start = 0
    let end = sortedArr1.length - 1

    let smallestDif = Math.abs(sortedArr1[0] + sortedArr2[0] - targetNumber)
    let closestPairOfNum = [sortedArr1[0], sortedArr2[0]]

    while (start < sortedArr1.length && end >= 0) {
        let numOfArr1 = sortedArr1[start]
        let numOfArr2 = sortedArr2[end]
        let currentDif = Math.abs(numOfArr1 + numOfArr2 - targetNumber)

        if (Math.abs(currentDif) < smallestDif) {
            smallestDif = Math.abs(currentDif)
            closestPairOfNum = [numOfArr1, numOfArr2]
        }

        if (currentDif === 0) {
            return [numOfArr1, numOfArr2]
        }

        if (numOfArr1 + numOfArr2 < targetNumber) {
            start += 1
        } else {
            end -= 1
        }
    }

    return closestPairOfNum
}


const arr1 = [-1, 3, 8, 2, 9, 5]
const arr2 = [4, 1, 2, 10, 5, 20]

let d1 = [19, 14, 6, 11, -16, 14, -16, -9, 16, 13]
let d2 = [13, 9, -15, -2, -18, 16, 17, 2, -11, -7]


console.log(closestPair(d1, d2, -15))