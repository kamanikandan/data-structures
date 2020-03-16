class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    append(data) {
        let node = new Node(data);
        if(this.head === null) {
            this.head = node;
            return;
        }

        let current = this.head;
        while(current.next !== null) {
            current = current.next;
        }
        current.next = node;
    }

    prepend(data) {
        let newHead = new Node(data);
        newHead.next = this.head;
        this.head = newHead;
    }

    deleteWithValue(data) {
        if(this.head === null) return;

        if(this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = new Node(data);
        while(current.next !== null) {
            if(current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }
}


let linkedList = new LinkedList();
console.log(linkedList.isEmpty());
linkedList.append(29);
linkedList.append(279);
linkedList.append(9);
linkedList.append(2);
linkedList.prepend(1000)
console.log(linkedList.isEmpty());
linkedList.deleteWithValue(9)
console.log(linkedList)