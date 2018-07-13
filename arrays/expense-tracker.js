const account = {
  name: 'Mark Graybill',
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description:  description,
      amount:  amount
    })
  },
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount
    })
  },
  getAccountSummary: function() {
    let totalExpenses = 0
    let totalIncome = 0
    let accountBalance = 0
    this.expenses.forEach(function(expense) {
      totalExpenses = totalExpenses + expense.amount
    })
    this.income.forEach(function(reciept) {
      totalIncome = totalIncome + reciept.amount
    })
    accountBalance = totalIncome - totalExpenses
    return `${this.name} has a balance of $${accountBalance}. \n$${totalIncome} in income \n$${totalExpenses} in expenses.`
  }

}  

account.addExpense("coffee", 3.75)
account.addExpense("coffee", 3.75)
account.addExpense("coffee", 3.75)
account.addExpense("coffee", 3.75)
account.addExpense("coffee", 3.75)
account.addExpense("lunch", 47.75)
account.addExpense("lunch", 52.75)
account.addExpense("lunch", 62.75)
account.addExpense("lunch", 75.28)
account.addExpense("lunch", 100.75)
account.addExpense("airfare", 300.62)
account.addExpense("airfare", 300.62)
account.addExpense("airfare", 315.27)
account.addIncome("sale - new machine", 1300.25)
account.addIncome("lease - new machine lease commision", 580)

console.log('');
console.log('--Expenses---');
for (let i = 0; i < account.expenses.length; i++) {
  let num = i + 1
  let amount = account.expenses[i].amount
  let description = account.expenses[i].description
  console.log(`${num}.  ${amount} -- ${description}`);
}

console.log('');
console.log('--Income---');
for (let i = 0; i < account.income.length; i++) {
  let num = i + 1
  let amount = account.income[i].amount
  let description = account.income[i].description
  console.log(`${num}.  ${amount} -- ${description}`);
}

// console.log(account);

console.log('');
console.log('--Summary--');
let summary = account.getAccountSummary()
console.log(summary);


