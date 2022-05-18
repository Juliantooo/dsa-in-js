// count every char in string except whitespace and regardless upper or lower case

const charCount = (string) => {

    const characters = {}; //define variable for store value and for return value

    for (let character of string) { //loop all string
        character = character.toLowerCase()
        if (/[a-z0-9]/.test(character)) {
            characters[character] > 0 ? characters[character] += 1 : characters[character] = 1
        }
    }

    return characters
}


console.log(charCount("Jelas Saya senang sekali doraemon 1234555232"))