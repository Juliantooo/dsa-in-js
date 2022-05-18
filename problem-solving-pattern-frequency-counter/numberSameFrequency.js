function sameFrequency(num1, num2) {
    //Split number into array
    const arrNum1 = num1.toString().split('')
    const arrNum2 = num2.toString().split('')

    if (arrNum1.length !== arrNum2.length) return false

    // frequency counter pattern => make object/var tu store the answer or helper
    const tempArr1 = {}
    const tempArr2 = {}

    // assign each number to object
    for (let i = 0; i < arrNum1.length; i++) {
        tempArr1[arrNum1[i]] ? tempArr1[arrNum1[i]] += 1 : tempArr1[arrNum1[i]] = 1
    }

    for (let j = 0; j < arrNum2.length; j++) {
        tempArr2[arrNum2[j]] ? tempArr2[arrNum2[j]] += 1 : tempArr2[arrNum2[j]] = 1
    }

    // check is value object with same 'key' is same 
    for (key in tempArr1) {
        if (tempArr1[key] !== tempArr2[key]) {
            return false
        }
    }

    return true

}

console.log(sameFrequency(184425, 582414))