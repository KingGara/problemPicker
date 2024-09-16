/*
    Insert Delete GetRandom O(1)

Implement the RandomizedSet class:

- RandomizedSet() initalizes the RandomizedSet object.

- bool insert(int, val) inserts an item val into the set if not present. Returns true
if the item was not present, false otherwise.

- bool remove(int val) removes an item val from the set if present. Returns true
if the item was present, false otherwise.

- int getRandom() returns a random element from the current set of elements
(its guaranteed that at least one element exists when this method is called)
Each element must have the same probability of being returned. 

You must implement the function of the class such that each function works in
average O(1) time complexity.
*/


class RandomizedSet {
    constructor() {
        this.list = [];
        this.map = new Map();
    }

    search(key) {
        if(this.map.has(key)) return true
    }

    insert(key) {
        if(this.search(key)) return false
    
        this.list.push(key);
        this.map.set(key, this.list.length - 1);
        return true
    }
/*
key = 2
indexOfKey: 1
lastElement: 3

{1:0, 3:2}  [1,2,3] -> [1,3]
*/
    remove(key) {
        if(!this.search(key)) return false
        
        let indexOfKey = this.map.get(key);
        let lastElement = this.list[this.list.length - 1];

        this.list[indexOfKey] = lastElement
        this.map.set(key, indexOfKey)
        this.list.pop();
        this.map.delete(key);
        return true
    }

    getRandom() {
        let random = Math.floor(Math.random() * this.list.length)
        return this.list[random]
    }
}


const randomSet = new RandomizedSet();

console.log(randomSet.insert(3));
console.log(randomSet.getRandom());


/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
