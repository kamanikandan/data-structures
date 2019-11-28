var Set = function() {
    this.collection = [];

    this.has = function(value) {
        return (this.collection.indexOf(value) !== -1)
    }

    this.values = function() {
        return this.collection;
    }

    this.add = function(value) {
        if(!this.has(value)) {
            this.collection.push(value);
        }
    }

    this.remove = function(value) {
        if(this.has(value)) {
            var index = this.collection.indexOf(value);
            this.collection.splice(index, 1);
        }
    }

    this.size = function() {
        return this.collection.length;
    }

    this.union = function(otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(value => {
            unionSet.add(value);
        });
        secondSet.forEach(value => {
            unionSet.add(value);
        });
        return unionSet.values();
    }

    this.intersection = function(otherSet) {
        var intersectionSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(value => {
            if(otherSet.has(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet.values();
    }

    this.difference = function(otherSet) {
        var differenceSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(value => {
            if(!otherSet.has(value)) {
                differenceSet.add(value);
            }
        });
        return differenceSet.values();
    }

    this.subset = function(otherSet) {
        var firstSet = this.values();
        return firstSet.every(function(value){
            return otherSet.has(value);
        });
    }
}

var setA = new Set();
setA.add("Mani1")
setA.add("Mani2")
setA.add("Mani3")
// console.log(setA.has("Mani5"))
// console.log(setA.values())
// setA.remove("Mani3")
// console.log(setA.values())
var setB = new Set();
setB.add("Raji1")
setB.add("Raji2")
setB.add("Raji3")
setB.add("Mani1")
setB.add("Mani3")
setB.add("Mani2")

// console.log(setA.union(setB));
// console.log(setA.intersection(setB))
// console.log(setA.difference(setB))
// console.log(setB.difference(setA))
// console.log(setB.size())
console.log(setA.subset(setB));

