
// function that sum number + number -1 until number become 0
const sumRange = (num) => {
    if (num === 1) return 1
    return num + sumRange(num - 1)
}

console.log(sumRange(4))