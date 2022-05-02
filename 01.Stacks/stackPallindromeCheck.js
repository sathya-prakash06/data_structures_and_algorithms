////////////////   STACKS /////////////////////////////

// Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).

// functions: push, pop, peek, length

// push : adding items to the stack
// pop : removing items from the stack
// peek : returns the last item in the stack
// length : returns the number of items in the stack

const word = "malayalam";

function palindromeCheck(word) {
  const letters = []; // this is the stack
  let rword = "";

  // put letters of word into stack
  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  // pop off the stack in reverse order
  for (let i = 0; i < word.length; i++) {
    rword += letters.pop();
  }

  rword === word
    ? console.log("It is a palindrome")
    : console.log("It is not a palindrome");
}

palindromeCheck(word);