


const turnIntoCapitalize = (str) => {
    const ArrOfString = str.split(/[^a-zA-Z]/);

    if (ArrOfString.length === 1) return ArrOfString[0].carAt(0).toUpperCase()

    const res = ArrOfString.map((el) => {
        return `${el.charAt(0).toUpperCase()}${el.slice(1, el.length)}`
    })

    return res.join('')
}


console.log(turnIntoCapitalize('Daniel LikeS-coding'))