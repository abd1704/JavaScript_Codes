// Arrays

// arrays can contain multiple types of elements and are resizable
const myarr = [0,1,2,4]

console.log(myarr[0])

//methods
myarr.push(6) // to push element in arr
myarr.pop() // removes last element
myarr.unshift(3)//it will add 3 to the first postions shifting all the elements to the right
myarr.shift() // removes first element
myarr.includes(5) // checks if 5 is present
myarr.indexOf(4) // checks the position

const newarr = myarr.join() // it binds the element and converts into string type

const arrs = [1,2,3,4,5]
const arr1 = arrs.slice(1,3)
console.log(arr1);
console.log(arrs)

const arr2 = arrs.splice(1,3)
console.log(arr2)
console.log(arrs);// only diff between slice and splice is that 
// slice does not effect to the original arr but splice affects to the configuration
//as you can see only remaining part will be shown


// if the array contans another array and goes like that
const arrr = [1,2,[3,4,[5,6]]] // upto depth 2
console.log(arrr.flat(2)) // it will print the arr in single arr

//shallow copy-means same reference
//deep copy - no same reference
