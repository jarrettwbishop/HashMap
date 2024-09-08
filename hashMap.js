import LinkedList from "./linkedList.js";

export default class HashMap{
    constructor(size) {
        this.buckets = []
        for (let i = 0; i < size; i++) {
            this.buckets.push(LinkedList());
        }
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % this.buckets.length();
    }

    set(key, value) {
        let index = hash(key);
        // If bucket is empty, create new node and set key value pair otherwise check all nodes. Exit function.
        let bucket = this.buckets[index]
        if (bucket.key === null) return bucket.append(key, value);

            // If the keys match, update the value

            // If the keys dont match but the values do, move to next node and repeat

        // After all nodes checked, create a new node and add the values

        }

    get(key) {

    }

    has(key) {

    }

    remove(key) {

    }

    length() {

    }

    clear() {

    }

    keys() {

    }

    values() {

    }

    entries() {
        
    }
}
