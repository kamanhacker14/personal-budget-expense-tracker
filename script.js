// ==========================================
// SpendWise - Week 5 JavaScript Foundation
// ==========================================


// 1. Store application data

let budget = 0;
let totalExpenses = 0;
let remainingBalance = 0;


// 2. Function to calculate the remaining balance

function calculateRemainingBalance(budgetAmount, expenseAmount) {
    return budgetAmount - expenseAmount;
}


// 3. Function to collect user input

function getBudgetInformation() {

    // Ask the user for their budget
    let budgetInput = prompt(
        "Enter your total monthly budget in KES:"
    );

    // Ask the user for their expenses
    let expenseInput = prompt(
        "Enter your total expenses in KES:"
    );


    // Convert user input from text to numbers
    budget = Number(budgetInput);
    totalExpenses = Number(expenseInput);


    // Check whether the user entered valid numbers
    if (
        isNaN(budget) ||
        isNaN(totalExpenses) ||
        budget < 0 ||
        totalExpenses < 0
    ) {
        console.log("Please enter valid positive numbers.");
        return;
    }


    // Calculate the remaining balance
    remainingBalance = calculateRemainingBalance(
        budget,
        totalExpenses
    );


    // Display results in the browser console
    console.log("===== SpendWise Budget Report =====");
    console.log("Total Budget: KES " + budget.toFixed(2));
    console.log("Total Expenses: KES " + totalExpenses.toFixed(2));
    console.log(
        "Remaining Balance: KES " +
        remainingBalance.toFixed(2)
    );
}


// 4. Start the SpendWise program

console.log("Welcome to SpendWise!");
console.log("JavaScript has loaded successfully.");

getBudgetInformation();