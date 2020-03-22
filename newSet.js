class MySet {
    constructor() {
        this.collection = [];
    }

    has(data) {
        return (this.collection.indexOf(data) !== -1);
    }

    add(data) {
        if (!this.has(data)) {
            this.collection.push(data);
            return true;
        }
        return false;
    }

    remove(data) {
        if (this.has(data)) {
            let index = this.collection.indexOf(data);
            this.collection.splice(index, 1);
            return true;
        }
        return false;
    }

    size() {
        return this.collection.length;
    }

    values() {
        return this.collection;
    }

    union(otherSet) {
        let unionSet = new MySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(data => unionSet.add(data));
        secondSet.forEach(data => unionSet.add(data));
        return unionSet;
    }

    intersection(otherSet) {
        let intersectionSet = new MySet();
        let firstSet = this.values();
        let secondSet = otherSet;
        firstSet.forEach(data => {
            if (secondSet.has(data)) {
                intersectionSet.add(data);
            }
        });
        return intersectionSet;
    }

    difference(otherSet) {
        let differenceSet = new MySet();
        let firstSet = this.values();
        let secondSet = otherSet;
        firstSet.forEach(data => {
            if (!secondSet.has(data)) {
                differenceSet.add(data);
            }
        });
        return differenceSet;
    }

    subset(otherSet) {
        let firstSet = this.values();
        return firstSet.every(data => {
            return otherSet.has(data);
        });
    }

}

let setA = new MySet();
let setB = new MySet();
setA.add(10)
setA.add(20)
setA.add(30)
setB.add(10)
setB.add(20)
console.log(setA.union(setB))
console.log(setA.intersection(setB))
console.log(setA.difference(setB))
console.log(setB.subset(setA))
console.log(setA.subset(setB))

