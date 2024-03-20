// javascript is dynamically typed language as data types can be declared at the run time
// unlike statically typed language where data types should be declared at compile time

// primitive data types
// 7 types:String ,Number,Boolean,null,undefined,Symbol,BigInt

const score =100
const isLoggedIn = false
const temp = null // return type of null is object type
console.log(typeof temp)
let email;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId) // will return false as Symbol assigns unique val

// reference type (non primitive)
// Array,Objects,Functions,

const heros = ["a","b"]
console.log(typeof heros) // return type obj

let obj = {
    name:"Abhi",
    age:10
}
console.log(typeof obj)// return type obj

let fun = function(){
    console.log("hello")
}
console.log(typeof fun) // only fun type will be function 



// Memory in javascript 

//Stack(primitive)  ,Heap(non-primitive)

//Stack memory

let first = "abhishek"
let second = first
second = "abhi"

// we have changed val in second but it wil  not affect the first val
// as second has assigned a copy of first not the reference
console.log(first)
console.log(second)



//Heap Memory

let objs ={
    email:"abc",
    name :"abhi"
}

let newObj = objs

newObj.email="abcd"

// here both val  will be same as both references are the same
console.log(objs.email)
console.log(newObj.email)



