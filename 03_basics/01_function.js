// function myfunc(){
//     console.log(hello)
// }

// // func - this will be the reference to the function


// function addtwonum(n1 ,n2){// here n1 and n2 are the parameters
//     console.log(n1+n2)

// }

// addtwonum(3,5) // 3 and 5 are arguments


// function loginUser(username){
//     if(username===undefined){
//         console.log("enter a username")
//         return
//     }
//    return `${username} just logged in`
// }

// console.log(loginUser()) // if we do not pass anything it will be undefined

const user ={
    name:"abhi",
    age:12
}

function myfunc(any){
    console.log(`user name is ${any.name} and age is ${any.age}`)
}

myfunc(user)


// using like rest operator
function my(...name){
    return name
}

console.log(my(100,300,4000))
