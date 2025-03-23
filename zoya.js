//Exercises 1-6
function reverseString(str) 
{
    let reversed = "";
    for (let i = str.length-1; i >= 0; i--)
    {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("hello"));

function countVowels(str) 
{
    let vowels = new Set(['a','e','i','o','u','y','A','E','I','O','U','Y']);
    let count = 0;
    for (let j = 0; j < str.length; j++)
    {
        if (vowels.has(str[j]))
            count++;
    }
    return count;
}
console.log(countVowels("typescript"))

function findMissingNumber(arr) {
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i]+1 != arr[i+1])
            return arr[i]+1;
    }
}
console.log(findMissingNumber([1,2,4,5,6]));

function firstNonRepeatingChar(str)
{
    let charCount = {};
    for (const char of str)
    {
        charCount[char] = (charCount[char]||0)+1;
    }
    for (let i = 0; i < str.length; i++)
    {
        if (charCount[str[i]] == 1)
            return str[i];
    }
    return null;
}
console.log(firstNonRepeatingChar("swiss"));
console.log(firstNonRepeatingChar("racecar"));

function deepEqual(obj1, obj2) {
    if (obj1 === obj2)
        return true;
    if (obj1 == null || obj2 == null || typeof obj1 !== "object" || typeof obj2 !== "object" )
        return false;
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length != keys2.length)
        return false;
    for (let key of keys1)
    {
        if (!keys2.includes(key) || !deepEqual(obj1[key],obj2[key]))
            return false;
    }
    return true;
}
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } }));

class LRUCache { 
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    get(key) { 
       if (!this.cache.has(key))
        return null;
       const value = this.cache.get(key);
       this.cache.delete(key);
       this.cache.set(key,value);
        return value;
    }
    put(key, value) { 
        if (this.cache.has(key))
            this.cache.delete(key);
        else if (this.cache.size >= this.capacity)
        {
            const firstkey = this.cache.keys().next().value;
            this.cache.delete(firstkey)
        }
        this.cache.set(key,value);
    } 
}
const cache = new LRUCache(2); 
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); 
cache.put(3, 3); 
console.log(cache.get(2)); 

