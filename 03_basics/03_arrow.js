const user ={
    price:99,
    msg:function(){
        console.log(`${this.price}, welcome to market`)
        console.log(this) // this referes to current context
    }
}

//user.msg()


// now for arrow functions
// first simple func
function chai(){
    console.log(this) // 
}
//chai()

// now arrow func



const myf= () =>{
   console.log(this) // it also gives empty object
}
myf()


// if we just console log this in globally
//console.log(this) // this we print and empty object

const addtwo = (num1,num2)=>{
    return num1+num2
}


// for above function we can also return it like
// without return word by () applying this

const addtwos = (num1,num2) =>(num1+num2) // no nedd to write return

const addtwosss = (num1,num2) => ({user:"abhi"}) //  to return obje