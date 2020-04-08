class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    enqueue(node) {
        if (this.isEmpty()) {
            this.collection.push(node);
        } else {
            for (let i = 0; i < this.size(); i++) {
                if (node.priority < this.collection[i].priority) {
                    this.collection.splice(i, 0, node);
                    return;
                }
            }
            this.collection.push(node);
        }
    }

    dequeue() {
        return this.collection.shift();
    }

    front() {
        return this.collection[0];
    }
    size() {
        return this.collection.length;
    }

    isEmpty() {
        return this.size === 0;
    }
}

let queue = new PriorityQueue();

queue.enqueue({ task: "Task 1", priority: 2 })
queue.enqueue({ task: "Task 1", priority: 1 })
queue.enqueue({ task: "Task 1", priority: 4 })
queue.enqueue({ task: "Task 1", priority: 3 })
queue.enqueue({ task: "Task 1", priority: 10 })
queue.enqueue({ task: "Task 1", priority: 6 })

console.log(queue)