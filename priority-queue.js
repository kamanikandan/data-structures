var PriorityQueue = function() {
    this.collection = [];

    this.enqueue = function(value) {
        if(this.isEmpty()) {
            this.collection.push(value);
        }
        else {
            var added = false;
            for(var i = 0; i < this.collection.length; i++) {
                if(value.priority < this.collection[i].priority) {
                    this.collection.splice(i, 0, value);
                    added = true;
                    break;
                }
            }
            if(!added)
                this.collection.push(value);
        }
    }

    this.dequeue = function() {
        return this.collection.shift();
    }

    this.front = function() {
        return this.collection[0];
    }

    this.size = function() {
        return this.collection.length;
    }

    this.isEmpty = function() {
        return this.collection.length === 0;
    }
}

var myQueue = new PriorityQueue();

myQueue.enqueue({name:'First Task1', priority:3});
myQueue.enqueue({name:'First Task2', priority:4});
myQueue.enqueue({name:'First Task3', priority:1});
myQueue.enqueue({name:'First Task4', priority:2});
console.log(myQueue.collection)
myQueue.dequeue()
console.log(myQueue.collection)
console.log(myQueue.front())
console.log(myQueue.size())
console.log(myQueue.isEmpty())


