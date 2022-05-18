const countdown = (number) => {
    if (number <= 0) {
        console.log(number)
        console.log('Done!')
        return;
    } else {
        console.log(number)
        number -= 1;
        countdown(number)
    }
}

countdown(10)