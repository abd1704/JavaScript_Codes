// let a = 10
// const b =20
// var c = 30

// if(true){
//     let a =20
//    // b=50
//     c=40
//     console.log(a)//val is changed locally
//    // console.log(b)// cannot change val of const
//     console.log(c)// we change the val globally
// }

//     console.log(a)
//     console.log(b)
//     console.log(c)


    // we can have the access of parent scope to the child scope
    // but in reverse direction we cannot have the acces to the child scope from the parent scope


    function add(num){
        return num+1;
    }
    add(5)// here it is valid

    myfunc(7) // here the hoisting problem occures as we are trying to access the function 
    // before we  are declaring it
    const myfunc = function(num){
        return num+2
    }


    

