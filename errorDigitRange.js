


const getMinOrMaxDigit = (arr) => {

    const digits = {}

    for (let i = 0; i < arr.length; i++) {
        digits[arr[i]] = digits[arr[i]] ? digits[arr[i]] + 1 : 1;
    }

    let maxDigits = null
    let minDigits = null

    let maxDigitsValue = -Infinity;
    let minDigitsValue = Infinity;

    let maxDigitKey = -Infinity;

    Object.entries((digits)).forEach((data) => {

        maxDigitKey = Math.max(maxDigitKey, parseInt(data[0]));
        if (data[1] >= maxDigitsValue && parseInt(data[0]) === maxDigitKey) {
            maxDigitsValue = data[1];
            maxDigits = data[0];
        }
        if (data[1] < minDigitsValue) {
            minDigitsValue = data[1];
            minDigits = data[0];
        }
    })

    return [parseInt(minDigits), parseInt(maxDigits)]

}

const errorDigitRange = (num) => {
    let arrNumMax = num.toString().split('').map((number) => parseInt(number));
    let arrNumMin = num.toString().split('').map((number) => parseInt(number));

    let minMaxDigit = getMinOrMaxDigit(arrNumMax);
    for (let i = 0; i < arrNumMax.length; i++) {
        if (arrNumMax[i] === minMaxDigit[1]) {
            arrNumMax[i] = 9
        }
    }

    let min = Math.min(...arrNumMin);
    for (let j = 0; j < arrNumMin.length; j++) {
        if (arrNumMin[0] === min) break;
        if (arrNumMin[j] === minMaxDigit[0]) {
            arrNumMin[j] = 0
        }
    }


    let minTransformedNumber = parseInt(arrNumMin.join(''));
    let maxTransformedNumber = parseInt(arrNumMax.join(''));

    return maxTransformedNumber - minTransformedNumber


}


console.log(errorDigitRange(10018))