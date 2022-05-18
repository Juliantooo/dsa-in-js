
const merging = (arr1, arr2) => {
    let sortedArr = []
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            sortedArr.push(arr1[i])
            i++
        } else {
            sortedArr.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        sortedArr.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        sortedArr.push(arr2[j])
        j++
    }

    return sortedArr
}

console.log(merging([2, 5, 6, 8, 9, 12, 20], [0, 1, 3, 4, 5, 7, 11, 13, 21]))