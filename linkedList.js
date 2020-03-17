class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    isEmpty() {
        return this.head === null;
    }

    append(data) {
        let node = new Node(data);
        if(this.head === null) {
            this.head = node;
            this.length++;
            return;
        }

        let current = this.head;
        while(current.next !== null) {
            current = current.next;
        }
        current.next = node;
        this.length++;
    }

    prepend(data) {
        let newHead = new Node(data);
        newHead.next = this.head;
        this.head = newHead;
        this.length++;
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

    getNthList(index) {
        let elIndex = this.length - index;
        let current = this.head;
        if(elIndex < 0 || index == 0) return -1;
        while(elIndex > 0) {
            current = current.next;
            elIndex--;
        }
        return current.data;
    }
}


let linkedList = new LinkedList();
linkedList.append(29);
linkedList.append(279);
linkedList.append(9);
linkedList.append(2);
linkedList.prepend(1000)
console.log(linkedList.getNthList(2))