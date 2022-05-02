//////////////////////// Queue /////////////////////////////////


// A Queue is a linear structure which follows a particular order in which the operations are performed. 
//The order is First In First Out (FIFO)


function Queue () { 
    // collection will hold the queue
    collection = [];

    //
    this.print = function() {
        console.log(collection);
    };

    // enqueue : adds a value to the end of the queue
    this.enqueue = function(element) {
        collection.push(element);
    };

    // dequeue : removes and returns the value at the beginning of the queue
    this.dequeue = function() {
        return collection.shift(); 
    };
    // front : returns the value at the beginning of the queue
    this.front = function() {
        return collection[0];
    };

    // isEmpty : returns length of the queue 
    this.size = function() {
        return collection.length; 
    };
    // isEmpty : returns true if the queue is empty
    this.isEmpty = function() {
        return (collection.length === 0); 
    };
}

var q = new Queue(); 
q.enqueue('a'); 
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();