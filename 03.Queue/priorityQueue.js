// Priority queue

// A priority queue is a special type of queue in which each element is associated with a priority value
// And, elements are served on the basis of their priority. That is, higher priority elements are served first.
// However, if elements with the same priority occur, they are served according to their order in the queue.

function PriorityQueue() {
  let collection = [];

  // printCollection : prints the contents of the collection
  this.printCollection = function () {
    console.log(collection);
  };

  // enqueue : adds a new element to the queue
  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          //checking priorities
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  // dequeue : removes and returns the element at the front of the queue
  this.dequeue = function () {
    var value = collection.shift();
    return value[0];
  };

  // front : returns the element at the front of the queue
  this.front = function () {
    return collection[0];
  };

  // size : returns the number of elements in the queue
  this.size = function () {
    return collection.length;
  };

  // isEmpty : returns true if the queue is empty
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

var pq = new PriorityQueue();
pq.enqueue(["apple", 5]);
pq.enqueue(["orange", 3]);
pq.enqueue(["mango", 1]);
pq.enqueue(["banana", 2]);
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();
