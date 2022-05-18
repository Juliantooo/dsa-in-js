
const isSame = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }

    const objFromArr1 = {}
    const objFromArr2 = {}

    for (item of arr1) {
        objFromArr1[item] = (objFromArr1[item] || 0) + 1
    }

    for (item of arr2) {
        objFromArr2[item] = (objFromArr2[item] || 0) + 1
    }

    for (key in objFromArr1) {
        console.log(key)
        if (objFromArr1[key ** 2] === objFromArr2[key]) {
            return true
        }
        return false
    }
}

console.log(isSame([2, 2, 3, 5], [5, 9, 4, 4]))