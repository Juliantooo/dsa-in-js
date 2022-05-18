
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

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merging(left, right)
}


const mrging = (arr1, arr2) => {
    let sortedArr = []
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            sortedArr.push(arr1[i])
            i++
        } else {
            sortedArr.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        sortedArr.push(arr1[i]);
        i++
    }

    while (j < arr2.length) {
        sortedArr.push(arr2[j])
        j++
    }

    return sortedArr
}


const mrgSort = (arr) => {
    // base condition. if array length = 1. its already sort (no other element greater that it)
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2); //find the mid index
    //create slice of arr from split into left side and right side by mid index
    let leftSide = mrgSort(arr.slice(0, mid))
    let rightSide = mrgSort(arr.slice(mid))
    // merging and sorting thoose 2 side of array
    return mrging(leftSide, rightSide);
}

const arr = [2, 6, 7, 100, 103, 80, 20, 40, 12, 3, 12, 9, 5, 10, 4, 1, 13]
console.log(mrgSort(arr))
