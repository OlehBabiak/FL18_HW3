const amount = Number (prompt ('Enter amount ?'));
const years = Number (prompt ('Enter number of years ?'));
const percentage = Number (prompt ('Enter percentage of a year ?'));

function profitCalculator () {
    if (amount >= 1000 && years >= 1 && percentage < 100 && Number.isInteger (years)) {

        let totalProfit = 0;
        let initialAmount = 0;
        let totalAmount = 0;

        for (let i = 0; i < years; i ++) {

            initialAmount = (amount + totalProfit) * percentage / 100
            totalProfit += initialAmount
            totalAmount = amount + totalProfit
        }
        alert (
            `\n
            Initial amount: ${ amount }\n
            Number of years: ${ years }\n
            Percentage of year: ${ percentage }\n\n
            Total profit: ${ totalProfit.toFixed (2) }\n
            Total amount:  ${ totalAmount.toFixed (2) }
            `
        )
    } else {
        alert ('Invalid input data')
    }
}

profitCalculator ()
