// immediately invoked function expression

(function chai(){
    // named iife
    console.log(`db connected`)
})(); // just like previous that ({}) will return something
// and do remember to add ; to end as it will not stop

((name) =>{
    console.log(`new db connected ${name}`)
})('abhi')




// Execution Context 

// Global execution context (this)
// Function execution context
// Eval execution context