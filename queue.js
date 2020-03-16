var Queue = function() {
    this.collection = [];

    this.enqueue = function(value) {
        this.collection.push(value);
    }

    this.dequeue = function() {
        return this.collection.pop();
    }

    this.front = function() {
        return this.collection[0];
    }

    this.size = function() {
        return this.collection.length;
    }
    
    this.viewQueue = function() {
        return this.collection;
    }
}

var myQueue = new Queue();
myQueue.enqueue("Mani")
myQueue.enqueue("Raja")
myQueue.enqueue("Ram")
console.log(myQueue.dequeue())
// console.log(myQueue.collection)
// console.log(myQueue.size())
console.log(myQueue.viewQueue())