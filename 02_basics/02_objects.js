// object literals
const Jsuser = {
    name:"Abhi",
    age:15,
    location:"chincholi",
    email:"abc@gmail.com"
}

// to access the property
console.log(Jsuser.name)

Jsuser.func = function(){
    console.log("hello")
}

// here in this statement we will see the function reference only
// and that will be anonymous type 
console.log(Jsuser)

console.log(Jsuser.func())