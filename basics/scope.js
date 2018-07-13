// Lexical Scope
// Global Scope - Defined outside of all code blocks
// Local Scope - Definded inside a code block

// In a scope you can access variables difindedin that scope or in any parent/ancestor of that scope

// Global Scope(varOne)
  // Local Scope(varTwo)
    // Local Scope(varFour)
  // Local Scope(varThree)

let varOne = 'varOne'

if (true) {
  console.log(varOne);
  let varTwo = "varTwo"
  console.log(varTwo);

  if (true) {
    let varFour = "varFour"
  }
  
}

if (true) {
  let varThree = "varThree"
}
console.log(varOne);

console.log(varTwo);
