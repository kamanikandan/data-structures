class Node {
    constructor(data, left=null, right=null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    
    add(data) {
        const node = this.root;
        if(node === null) {
            this.root = new Node(data);
        }
        else {
            const searchTree = function(node) {
                if(data < node.data) {
                    if(node.left === null) {
                        node.left = new Node(data);
                        return;
                    }
                    else if(node.left !== null) {
                        return searchTree(node.left);
                    }
                }
                else if(data > node.data) {
                    if(node.right === null) {
                        node.right = new Node(data);
                        return;
                    }
                    else if(node.right !== null) {
                        return searchTree(node.right);
                    }
                }
                else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }

    findMin() {
        let current = this.root;
        while(current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    findMax() {
        let current = this.root;
        while(current.right !== null) {
            current = current.right;
        }
        return current.data;
    }
}

const myBST = new BST();

myBST.add("20")
myBST.add("10")
myBST.add("40")
myBST.add("15")
myBST.add("25")
myBST.add("5")
// console.log(myBST.root)
// console.log(myBST.findMin())
console.log(myBST.findMax())