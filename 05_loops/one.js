// for 
// for(let ind=0;ind<10;ind++){
//     console.log(ind);
// }

// continue and break

// for(let i=0;i<10;i++){
   
//     if(i==4){
//         console.log("continues")
//         continue
//     }

//     if(i==6){
//         console.log("breaks")
//         break
//     }
//     console.log(i)
// }



// while loops

// let i =0
// while(i<10){
//     console.log(i)
//     i=i+2
// }


// for of loop- it iterates over the values of iterable objects

// const arr =[1,2,3,4,5,6]

// for(const i of arr){
//     console.log(i)
// }

// const map = new Map();
// map.set('a','1')
// map.set('ab','10')
// map.set('abc','100')

// for(const [key,value] of map){
//     console.log(key + "-" +value)
// }


// as objects are not iterable by for of so we need for in loop ,and it iterates over keys

// const obj = {
//     a:'abhi',
//     b:'abhishek',
//     c:'tongale'
// }


// for(const key in obj){
//     console.log(key)
// }


// for each loop- used to iterate over arrays 
// do not work with objects like strings,maps or sets
// it takes callback function as arguments(function with no name) it can take 3 arguments
// curr ele,ind of curr,arr
/// it does not return val and always returns undefined

// const coding =['a','b','c']

// coding.forEach((item) =>{
//     console.log(item)
// })



//filter function

const nums =[1,2,3,4,5,6,6,7]

// const newnums = nums.filter((num)=> num>3) // if we write {} after => we have to return it 
// console.log(newnums)


// // map functions
// const mnums = nums.map((num)=> num+10)
// console.log(mnums)

// chaining
// const lnums = nums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>50)
// console.log(lnums)


// it takes one accumalator,current val and on intial val that will be assigned to accumalator
// and then her curr val will be added to accumalator and lastly we willreturn tot
const tot = nums.reduce( function(acc,currval)  { 
    return acc+currval
},0)

console.log(tot)