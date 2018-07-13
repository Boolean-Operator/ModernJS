let myAccount = {
  name: 'Andrew Mead',
  expenses: 0,
  income: 0
}

let addExpense = function(account, amount) {
  account.expenses = account.expenses + amount
}

let addIncome  = function(account, amount) {
  account.income = account.income + amount
}

let resetAccount = function(account) {
  account.expenses = 0
  account.income = 0
}

let getAccountSummary = function(account) {
  let bal = account.income - account.expenses
  return `${account.name} \n Income: \$${account.income} \n Expenses: \$${account.expenses} \n Balance: \$${bal}.`
}

addExpense(myAccount, 100)
console.log(myAccount);

addIncome(myAccount,1000)
console.log(myAccount);

console.log(getAccountSummary(myAccount));

resetAccount(myAccount)
console.log(myAccount);

console.log(getAccountSummary(myAccount));
