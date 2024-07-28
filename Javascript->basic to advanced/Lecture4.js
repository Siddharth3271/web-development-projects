//dynamically typed language
// let num=41;
// num='siddharth'
// console.log(num)
//we simply don't assign the datatype to a variable

//statically typed langauge
//c,c++,java
//int num=34;
//string s="siddharth"
//datatype defined for a variable


//in javascript there are
//-primitive datatypes

/*
Number
string
boolean
undefined
null
bigInt
symbol
*/
//-non primitive datatypes
//object(arrays)


//number **************
// let num1=34
// let num2=56.78
// let c=typeof(num1)
// var d=typeof(num2)
// console.log(c,num1)
// console.log(d,num2)

// Infinity
// NaN //not a number

// let num3=9/0
// console.log(num3)

// let num4='siddharth'/2
// console.log(num4)


//string ***************
// let myname='Siddharth Shukla'
// console.log(myname,typeof(myname))


//boolean **************
//true and false

// let isloggedin=false;
// console.log(typeof(isloggedin),isloggedin)

//undefined *************
// let a
// console.log(a,typeof(a))


//null *****************
/*The typeof operator returns a string indicating the type of the unevaluated operand. In this case, it returns "object" because null is considered an object in JavaScript, even though it is a special value that represents "no value".*/
// let myAge=null  //if i don't want to remain it empty(don't want to declare it)
// console.log(typeof(myAge), myAge)

//symbol ***************
// let symbol1 = Symbol('siddharth');
// let symbol2 = Symbol('siddharth');
// console.log(symbol1 === symbol2); // false
// let c='siddharth'
// let d='siddharth'
// let e=Symbol('siddharth')   //give a unique property
// console.log(c==d)
// console.log(c==e)
/*Symbols are often used as unique keys for object properties to avoid property name collisions.*/

//BigInt ****************
//for than 15 digits
// let num1=23456890
// console.log(num1,typeof(num1))

// let num2=23456890n
// console.log(num2,typeof(num2))

// let num3=BigInt(23456890)
// console.log(num3,typeof(num3))

//non primitive
//object-> used for storing values of different datatypes
//key and value pair
// let mydetails={
//     name:'siddharth',course:'javascript'
// }
// console.log(mydetails)




