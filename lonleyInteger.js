function lonelyinteger(a) {
    // Write your code here
    const result = {};

    for (let i = 0; i < a.length; i++) {
        result[a[i]] = result[a[i]] ? result[a[i]] + 1 : 1;
    }

    for (const [key, value] of Object.entries(result)) {
        if (value === 1) {
            return key
        }
    }
    return null
}

console.log(lonelyinteger([1, 1, 2, 5, 6, 2, 5, 9, 6, 9]))