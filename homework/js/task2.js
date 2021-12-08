let minValue = 0;
let maxValue = 3;
const prizeAmountArray = [100, 50, 25];
let attemptLeft = 3;
let totalPrize = 0;

console.log (prizeAmountArray)

function newGame () {
    for (let i = 0; i < prizeAmountArray.length; i ++) {  // запускаєм 3 спроби
        let randomNumber = Math.floor (Math.random () * (maxValue - minValue)) + minValue; // рандомне число
        let enteredValue = Number (prompt (`                    
    Choose a roulette pocket number from ${ minValue } to ${ maxValue }\n 
    Attempt left: ${ attemptLeft }\n
    Total prize: ${ totalPrize }$
    Possible prize on current attempt: ${ prizeAmountArray[i] }$
    `))                                                                                                 // введене число

        if (randomNumber === enteredValue && enteredValue !== null) {  // Якщо вгадав:
            totalPrize += prizeAmountArray[i] // Виграш збільшується
            break                 //як тільки вгадав, перериваєм цикл
           }

        attemptLeft --                    // К-сть спроб зменшується
    }

    let answerAfterWin = confirm (`Congratulation, you won!   Your prize is: ${ totalPrize }$. Do you want to continue?`)   // Якщо виграв питаєм чи продовжуєм

    if (answerAfterWin) {                   // Якщо так, продовжуєм гру
        attemptLeft = 3;
        maxValue += 1;
        for (let prizeAmount of prizeAmountArray) {
            prizeAmount *= 2
        }
        newGame ()
    } else {
        alert (`Thank you for your participation. Your prize is: ${ totalPrize } $`)  //   Якщо виграв але не продовжує Дякуєм за участь, ваш приз 100дол

    }
}

let firstAnswer = confirm ('Do you want to play a game?')

if (firstAnswer) {
    newGame()
    alert(`Thank you for your participation. Your prize is: ${totalPrize}$`) // Якщо не вгадав
    let answerAfterLoose = confirm ('Do you want to play again?')          //Питаєм чи знову граєм
    if (answerAfterLoose) {                                                 // Якщо так, посинаєм нову гру
        minValue = 0;
        maxValue = 3;
        attemptLeft = 3;
        totalPrize = 0;
        newGame ()
    }
} else {
    alert ('You did not become a billionaire, but can.')
}

//===========================================================================




