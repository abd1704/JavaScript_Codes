const balance =1000
if(false) console.log("test") ,
console.log("second")
console.log(typeof(3-"5"))

// switch case 
const num =1;
switch(num){

    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    default:
        console.log("3");
        break;
}

if(-0==false){
    console.log(true)
}


// Nullish Coalescing Operator (??) :null undefined

let val;
val=5 ?? 10 
console.log(val) // will print first val
val=null ?? 10 
console.log(val) // will print second  val as nul val can make errors in the code so for saftey
val = undefined ?? 15 // will print 15 as undefined can also make errors
console.log(val)
val = null ?? 10 ?? 20 // will print first not null val
console.log(val)



// ternary operator
const price = 100
price>=100?console.log("more"):console.log("less")


var a =10
function myf(){
    // it wil have only local scope 
     var a = 15
    console.log(a)
}
myf()

// global val will be printed
console.log(a)