let Stack = function () {
  let count = 0;
  let storage = {};

  // push : adds a value onto the end of the stack
  this.push = function (value) {
    storage[count] = value;
    count++;
  };

  // pop : remove and return the value at the end of the stack

  this.pop = function () {
    if (count === 0) {
      return undefined;
    }

    count--;
    let result = storage[count];
    delete storage[count];
    return result;
  };

  // size : returns the number of items in the stack

  this.size = function () {
    return count;
  };

  // peek : returns value at the end of the stack

  this.peek = function () {
    return storage[count - 1];
  };
};

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.size());
