//////////////  Linked List  //////////////

// A linked list is a sequence of data structures, which are connected together via links.
// Link − Each link of a linked list can store a data called an element
// Next − Each link of a linked list contains a link to the next link called Next.
// LinkedList − A Linked List contains the connection link to the first link called First.

//   Array     vs Linked list

// 1. Fixed size           1. Dynamic size
// 2.Inefficient insertion and deletion    2. Efficient insertion and deletion
// 3.Random access(efficient indexing)          3. No Random access
// 4.Much memory waste        4. no waste of memory
// 5.sequential access is faster  5. slower

function LinkedList() {
  let length = 0;
  let head = null;

  let Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    let node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function (element) {
    let currentNode = head;
    let previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length--;
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.indexOf = function (element) {
    let currentNode = head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }

    return -1;
  };

  this.elementAt = function (index) {
    let currentNode = head;
    let count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };

  this.addAt = function (index, element) {
    let node = new Node(element);

    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    if (index > length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  };

  this.removeAt = function (index) {
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;
    if (index < 0 || index >= length) {
      return null;
    }
    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  };
}

let myLinkedList = new LinkedList();
myLinkedList.add("a");
myLinkedList.add("b");
myLinkedList.add("c");
myLinkedList.add("d");
myLinkedList.add("e");
console.log(myLinkedList.size());
console.log(myLinkedList.removeAt(3));
console.log(myLinkedList.elementAt(3));
console.log(myLinkedList.indexOf("b"));
console.log(myLinkedList.size());
