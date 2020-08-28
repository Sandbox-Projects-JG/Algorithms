/*
Hash Tables are a collection of key-value pairs. They are used to find values very quickly with a provided key. Hash functions
should be fast and prevent collisions (distribute uniformly) and be deterministic (same key can be found at the same index every time)

To deal with collisions we can use 'Separate Chaining' (example in code) which means we'll create a subarray and store new key/value
pairs within that array. We can also use 'Linear Probing' which looks for the next available empty slot within the hash table
to store the value. 

Hash Table Big 0:
- Insert 0(1)
- Deletion 0(1)
- Access 0(1)
*/

class HashTable {
  //prime numbers are ideal for a hash table size to reduce collisions
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }
  //set will be used to get the hash index value, then store that key/value pair as an array within the hash table
  //this uses 'separate chaining' to allow for multiple key/value pairs to be stored at the same index using an array
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);

    return index;
  }
  //get is used to find the specific element based off the key
  get(key) {
    let index = this._hash(key);
    //we'll check to see if something exists at the provided index
    if (this.keyMap[index]) {
      //if we found something we know we have an array at that location, so we loop through that array to find a key match
      for (let i = 0; i < this.keyMap[index].length; i++) {
        //we're looping through the subarray [i] and looking at the first element within that subarray to find the matching key
        if (this.keyMap[index][i][0] === key) {
          console.log(
            `Found value for key ${key} which is ${this.keyMap[index][i][1]}`
          );
          //if we find a matching key, we return that subarray since it has the key/value pair
          return this.keyMap[index][i][1];
        }
      }
    }
    console.log(`we didn't find anything for ${key}`);
    //if we don't find a matching key we'll return undefined
    return undefined;
  }

  values() {
    //we'll store all the values within an array
    let valuesArr = [];
    //we'll loop through each index in the keyMap array
    for (let i = 0; i < this.keyMap.length; i++) {
      //if we have a subarray at that index then we know we can loop through those
      if (this.keyMap[i]) {
        //this loop will go through each subarray to find the values
        for (let j = 0; j < this.keyMap[i].length; j++)
          //we check if we have duplicates. Only push unique elements
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            //we want to push just the values, so which subarray [j] then which element within that subarray [1], 0 being the key
            valuesArr.push(this.keyMap[i][j][1]);
          }
      }
    }
    console.log("values are", valuesArr);
    return valuesArr;
  }

  keys() {
    //we'll store all the keys within an array
    let keysArr = [];
    //we'll loop through each index in the keyMap array
    for (let i = 0; i < this.keyMap.length; i++) {
      //if we have a subarray at that index then we know we can loop through those
      if (this.keyMap[i]) {
        //this loop will go through each subarray to find the keys
        for (let j = 0; j < this.keyMap[i].length; j++)
          //we check if we have duplicates. Only push unique elements
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            //we want to push just the keys, so which subarray [j] then which element within that subarray [0], 1 being the value
            keysArr.push(this.keyMap[i][j][0]);
          }
      }
    }
    console.log("keys are", keysArr);
    return keysArr;
  }
}

let h = new HashTable(17);
h.set("maroon", "#800000");
h.set("yellow", "#FFFF00");
h.set("olive", "#808000");
h.set("salmon", "#FA8072");
h.set("lightcoral", "#F08080");
h.set("mediumvioletred", "#C71585");
h.set("plum", "#DDA0DD");
h.set("purple", "#DDA0DD"); //intentional duplicate
h.set("violet", "#DDA0DD"); //intentional duplicate
console.log(h.keyMap);
h.get("yellow"); //returns the valueof yellow which is #FFFF00
h.get("red"); //should return undefined since it's not currently stored in the hash table
h.values(); //returns only the values that get stored in a separate array
h.keys(); //returns only the keys that get stored in a separate array
