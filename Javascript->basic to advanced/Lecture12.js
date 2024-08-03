//strings->primitive datatype
// ""
// ''
// ``->template literals
let str1='i love coding'
let str2="siddharth shukla"
let str="siddharth shukla"
let str4="Siddharth"
//indexing
console.log(str1[0])
console.log(str1+str2)
console.log(str1+" "+str2)
let str3=str1.concat(str2)
console.log(str3)
console.log("Hello everyone, "+str1)
//using template literals
console.log(`this course is helpful ${str1} and ${str2}`)

console.log("it' ll right")
console.log('it\' ll right')  //->using escape sequence
console.log('it\\ ll right')  //->using escape sequence
console.log('it\nll right')  //->using escape sequence

//using strings as object
let myName=new String("Siddharth")
let myName2=new String("Siddharth")
console.log(typeof str1)
console.log(typeof myName)
console.log(str2==str)
console.log(str2===str)
console.log(str4===myName)
console.log(str4==myName)
console.log(myName2==myName)
console.log(myName2===myName)