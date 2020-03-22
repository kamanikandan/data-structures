class MyMap {
    constructor() {
        this.collection = {};
        this.count = 0;
    }

    size() {
        return this.count;
    }

    has(key) {
        return key in this.collection;
    }

    add(key, value) {
        this.collection[key] = value;
        this.count++;
    }

    get(key) {
        return this.has(key) ? this.collection[key] : null;
    }

    delete(key) {
        if (this.has(key)) {
            delete this.collection[key];
            this.count--;
        }
    }

    values() {
        return this.collection;
    }

    clear() {
        this.collection = {};
        this.count = 0;
    }

}

let map = new MyMap();
map.add("firstName", "Manikandan");
map.add("lastName", "Kaliyappan");
map.add("age", 28);
map.add("address", "ABC Street, Pudukuppam");

console.log(map.size())
console.log(map.has("lastName"))
map.add("pin", 604154)
console.log(map.get("age"))
map.delete("lastname")
console.log(map.values())
map.clear()
console.log(map)