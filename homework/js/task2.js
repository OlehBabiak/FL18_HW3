let minValue = 0;
let maxValue = 3;
const prizeAmountArray = [100, 50, 25];
let attemptLeft = 3;
let totalPrize = 0;

//===============================================================================================
function newGame () {

    for (let i = 0; i < prizeAmountArray.length; i ++) {  // запускаєм 3 спроби

        let randomNumber = Math.floor (Math.random () * (maxValue - minValue)) + minValue; // рандомне число
        let enteredValue = Number (prompt (`                    
    Choose a roulette pocket number from ${ minValue } to ${ maxValue }\n 
    Attempt left: ${ attemptLeft }\n
    Total prize: ${ totalPrize }$
    Possible prize on current attempt: ${ prizeAmountArray[i] }$
    `))
        // введене число
        attemptLeft --                    // К-сть спроб зменшується
        if (randomNumber === enteredValue && enteredValue !== null) {  // Якщо вгадав:
            totalPrize += prizeAmountArray[i] // Виграш збільшується
            let answerAfterWin = confirm (`Congratulation, you won!   Your prize is: ${ totalPrize }$. Do you want to continue?`)   // Якщо виграв питаєм чи продовжуєм
            if (answerAfterWin) {                   // Якщо так,
                attemptLeft = 3;                    // змінюємо вхідні дані
                maxValue += 1;
                for (let prizeAmount of prizeAmountArray) {
                    prizeAmount *= 2
                }
                newGame ()                                       //продовжуєм гру
            } else {
                alert (`Thank you for your participation. (вгвдав) Your prize is: ${ totalPrize } $`)//   Якщо виграв але не продовжує Дякуєм за участь, ваш приз 100дол
                return;
            }
        } else {
            alert (`Thank you for your participation. (невгадав) Your prize is: ${ totalPrize } $`)  //   Якщо невгадав але не продовжує Дякуєм за участь, ваш приз 100дол
        }// Якщо не вгадав, повторюєм цикл
    }


        let answerAfterLoose = confirm ('Do you want to play again?')//Питаєм чи знову граєм
        console.log (answerAfterLoose)
        if (answerAfterLoose) {                                                 // Якщо так, посинаєм нову гру
            minValue = 0;
            maxValue = 3;
            attemptLeft = 3;
            totalPrize = 0;
            newGame ()
        }


}



let firstAnswer = confirm ('Do you want to play a game?')
if (firstAnswer) {
    newGame()
} else {
    alert ('You did not become a billionaire, but can.')
}

//===========================================================================




