// Logical Operators

// 1. And
// Returns True if both operands are True
console.log(true && true);

// 2. Or
// Returns True if one of the operands is True
console.log(false || true);

// 3. Not
// Returns the opposite of the given statement
console.log(!true);

// example

let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);

let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);
