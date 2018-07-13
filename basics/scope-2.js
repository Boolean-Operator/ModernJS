// Lexical Scope
// Global Scope - Defined outside of all code blocks
// Local Scope - Definded inside a code block

// In a scope you can access variables difindedin that scope or in any parent/ancestor of that scope

// Global Scope(varOne)
  // Local Scope(varTwo)
    // Local Scope(varFour)
  // Local Scope(varThree)

// let name = 'Andy'

if (true) {
  // let name = "Mike"

  if (true) {
    let name = "Jen"
    console.log(name);
  }
}

if (true) {
  console.log(name);
  
}