var Stack = function() {
    this.count = 0;
    this.storage = {};

    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function() {
        if(this.count === 0) {
            return undefined;
        }
        this.count--;
        delete this.storage[this.count];
    }

    this.peek = function() {
        if(this.count === 0) {
            return undefined;
        }
        return this.storage[this.count - 1];
    }

    this.size = function() {
        return this.count;
    }
}

var myStack = new Stack();
myStack.push("Mani");
myStack.push("Raji");
myStack.push("Raji");
myStack.push("Raji");
myStack.push("Raji");
myStack.push("Raji");
myStack.push("Raji");
console.log(myStack.storage);
// myStack.pop();
// console.log(myStack.storage)
// console.log(myStack.size())
// console.log(myStack.peek())