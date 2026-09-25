# SpendWise Dashboard Shell

## Week 4 - CSS Grid & Flexbox

SpendWise is a modern personal budget tracker dashboard created as part of the Week 4 web development assignment.

The goal of this project is to demonstrate how CSS Grid and Flexbox can be used to create a clean, responsive dashboard layout.

---

## Project Features

The SpendWise dashboard contains:

- Sidebar navigation menu
- Dashboard header
- Financial summary cards
- Six expense category cards
- Recent transactions section
- Responsive mobile layout
- CSS custom properties
- Hover micro-interactions
- Keyboard focus states
- Dark theme using `prefers-color-scheme`

---

## Dashboard Categories

The dashboard contains six realistic financial categories:

1. Food
2. Transport
3. Rent
4. Entertainment
5. Savings
6. Utilities

Each category displays:

- Category name
- Amount spent
- Percentage
- Budget or savings goal
- Remaining amount
- Progress bar

---

## CSS Grid

CSS Grid is used for the main dashboard structure.

The desktop layout contains:

- A 260px sidebar
- A flexible main content area

CSS Grid is also used for:

- Financial summary cards
- Expense category cards
- Responsive layouts

Example:

```css
.dashboard {
    display: grid;
    grid-template-columns: 260px 1fr;

## Week 5 - JavaScript Foundation

### Overview

In Week 5, I extended the SpendWise budgeting dashboard by adding JavaScript functionality. The purpose of this stage was to transform the project from a mainly visual interface into an application that can receive and process budgeting information.

Users can enter their total budget and total expenses. JavaScript then calculates the remaining balance and displays the results in the browser console.

### JavaScript Concepts Implemented

The following JavaScript concepts were implemented:

* Variables
* Data types
* User input
* Number conversion
* Arithmetic calculations
* Functions
* Conditional statements
* Input validation
* Console output

### Variables

Variables are used to store important budgeting information.

```javascript
let budget = 0;
let totalExpenses = 0;
let remainingBalance = 0;
```

The `budget` variable stores the user's total budget, while `totalExpenses` stores the user's total expenses. The `remainingBalance` variable stores the amount remaining after expenses are deducted from the budget.

### User Input

SpendWise collects information from the user using JavaScript's `prompt()` function.

```javascript
let budgetInput = prompt(
    "Enter your total monthly budget in KES:"
);

let expenseInput = prompt(
    "Enter your total expenses in KES:"
);
```

The input is then converted from text into numbers using the `Number()` function.

```javascript
budget = Number(budgetInput);
totalExpenses = Number(expenseInput);
```

### Budget Calculation

The remaining balance is calculated by subtracting total expenses from the total budget.

```javascript
function calculateRemainingBalance(budgetAmount, expenseAmount) {
    return budgetAmount - expenseAmount;
}
```

For example:

```text
Budget: KES 30,000
Expenses: KES 18,500
Remaining Balance: KES 11,500
```

### Functions

Functions help organize the program and make the code reusable.

The `calculateRemainingBalance()` function performs the budget calculation.

The `getBudgetInformation()` function collects and validates information from the user.

Using functions makes the program easier to understand, maintain, and reuse.

### Console Output

The calculated results are displayed in the browser console using `console.log()`.

Example:

```text
===== SpendWise Budget Report =====
Total Budget: KES 30000.00
Total Expenses: KES 18500.00
Remaining Balance: KES 11500.00
```

### Input Validation

The application checks whether the user enters valid numerical values.

Invalid values such as text or negative numbers are rejected.

### Project Files

The project contains:

* `index.html` - Provides the structure of the SpendWise dashboard.
* `style.css` - Provides the visual styling and layout.
* `script.js` - Contains the JavaScript variables, input handling, calculations, functions, and console output.
* `README.md` - Documents the project and the concepts implemented.

### Learning Outcome

This week's work helped me understand how JavaScript can make a web application interactive. I learned how to store data using variables, collect information from users, perform calculations, create reusable functions, validate input, and display results in the browser console.
