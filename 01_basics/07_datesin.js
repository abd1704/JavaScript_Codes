//Dates

let mydate = new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())

console.log(typeof mydate)


// our customized date
let mycreatedate = new Date(2024,2,15)
console.log(mycreatedate)
console.log(typeof mycreatedate)

let currdate = Date.now()
console.log(currdate) // it will count milliseconds from 1 jan 1970 till now

console.log(mycreatedate.getTime()) // it will be the milliseconds till the given date

// if we want the time in seconds
console.log(Math.floor(Date.now()/1000))

let dates = new Date()
console.log(dates)
console.log(dates.getMonth)
console.log(dates.getDay)


dates.toLocaleString('default',{
    weekday:"long"
})

