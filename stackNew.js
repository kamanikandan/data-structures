class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = new Node();
    }

    isEmpty() {
        return this.top === null;
    }

    peek() {
        return this.top;
    }

    push(data) {
        let node = new Node(data);
        node.next = this.top;
        this.top = node;
    }

    pop() {
        let deletedNode = top.data;
        this.top = this.top.next;
        return deletedNode;
    }
}


let stack = new Stack();
stack.push(10);
stack.push(30);
stack.push(50);

console.log(stack)