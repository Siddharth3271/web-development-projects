//date
//starts from midnight at the beginning of january 1 1970
// let date=new Date()
// console.log(date)
// console.log(date.toString())
// console.log(date.toLocaleString())
// console.log(date.toDateString())

// let d=Date.now()
// console.log(d)  //in milliseconds from January 1 1970
// console.log(d/1000)  //in seconds from January 1 1970

// let d2=new Date(0)
// console.log(d2.toString())
// let d3=new Date(10000)
// console.log(d3)

//Date(year,month,date,hour,minute,second,millisecond)

let d4=new Date("2020 12 14")
let d5=new Date()
console.log(typeof d4)
// console.log(d4)
// console.log(d4.toISOString())
// console.log(d4.toString())

//methods
//get Methods
// console.log(d4.getDay())
// console.log(d4.getMonth())
// console.log(d5.getMonth())
// console.log(d5.getDay())
// console.log(d5.getDate())
// console.log(d5.getTime())

//set Methods
console.log(d4.setDate(17))
console.log(d4.toString())
