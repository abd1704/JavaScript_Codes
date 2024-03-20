const num = new Number(100.7434)
console.log(num)

// round off 2 decimal places
console.log(num.toFixed(2))

// calculate the precise val upto 3 digits from left
// here after 100. the round will become like 8. something
// so we know that if the value in right side is greater than 5 after .
// we add one to the val
// so ans will be 101
console.log(num.toPrecision(3))


// Math properties 

console.log(Math.ceil(4.2))
console.log(Math.floor(5.8))
console.log(Math.min(4,3,2,5))
console.log(Math.max(45,43,63,93))


console.log(Math.random())
// if want to generate random val between 1 to 10 with min val of 1
console.log(Math.random()*10+1) // insures val is minimum 1