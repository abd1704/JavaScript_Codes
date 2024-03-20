// const tuser  = new Object();//   singleton object
// tuser.name ="abhi"
// tuser.age = 15
// tuser.email = "abc@gmail.com"

// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}

// const obj3 =Object.assign({},obj1,obj2) // {} means obj1 and obj2 will be added in {} 
// console.log(obj3)


// // to print out the keys and values
// console.log(Object.keys(tuser))
// console.log(Object.values(tuser))



// to destructure the object
const course  ={
    coursename:"js in hindi",
    price:"33343",
    courseInstructor:"abhi"
}

// here from the following line we deconstruct the object
// now we can call the courseInstructor as instructor and withour applying obj name behind it

const{courseInstructor:instructor} = course
console.log(instructor)

