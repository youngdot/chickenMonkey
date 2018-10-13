for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // 1 remainder of 5 = 0 and 1 remainder of 7 = 0 with 35 being the first matching number. If is your most relevant statement)
    if ( currentNumber % 5 == 0 && currentNumber % 7 == 0 ) {
        console.log("ChickenMonkey")
}
    // else if 1(currentNumber) goes into 5 w/ remainder of 0, colsole.log the word chicken.)
    else if ( currentNumber % 5 == 0 ) {
        console.log("Chicken")
    //else if 1(currentNumber) goes into 7 w/ remainder of 0, colsole.log the word monkey.)
    } else if (currentNumber % 7 == 0 ) {
        console.log("Monkey")
    } else {
    //else just log the current number
        console.log(currentNumber)
    }
}