class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = new Node();
        this.tail = new Node();
    }
    
    isEmpty() {
        return this.head == null;
    }

    peek() {
        return this.head.data;
    }

    add(data) {
        let node = new Node(data);
        if(this.tail.data != null) {
            this.tail.next = node;
        }
        this.tail = node;
        if(this.head.data == null) {
            this.head = node;
        }
    }

    remove() {
        let deletedNode = this.head.data;
        if(!this.isEmpty()) {
            this.head = this.head.next;
        }
        if(this.head == null) {
            this.tail.data = null;
        }
        return deletedNode;
    }
}


let stack = new Stack();
stack.add(10);
// stack.add(110);
// stack.add(1032);
// stack.add(1900);

console.log(stack);