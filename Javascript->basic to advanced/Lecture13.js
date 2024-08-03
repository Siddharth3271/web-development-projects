let str="this Is A learn JavascrIPt course"
let str2="       this Is A learn     JavascrIPt course         "
//to lowercase()
let str1=str.toLowerCase()
console.log(str)
console.log(str1)
//to uppercase()
console.log(str.toUpperCase())
//includes()
let a=str.includes("this")
console.log(a)
//charAt()
console.log(str.charAt(11))
//indexOf()
console.log(str.indexOf("n"))
console.log(str.indexOf("i"))
//trim()->removes spacing from start and end
console.log(str2)
console.log(str2.trim())
console.log(str2.trimEnd())
console.log(str2.trimStart())
//slice()
console.log(str.slice(4,14))  //excluding end
//split()->convert string to array
console.log(str.split())
console.log(str.split(""))
console.log(str.split(" "))