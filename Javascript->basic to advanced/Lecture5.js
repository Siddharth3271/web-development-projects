//type conversion and coercion
//implicit
let num=32+3+'siddharth'
console.log(num,typeof num)
let num2='siddharth'+12+13
console.log(typeof num2,num2)
let num3=12/'6'
let num4=12/'siddharth'
let num5=4*'siddharth'
let num6='siddharth'*3
console.log(typeof num3,num3)
console.log(typeof num4,num4)
console.log(typeof num5,num5)
console.log(typeof num6,num6)



//explicit
// value to String -> String(value), value.toString()
// value to Numbers-> Number(Value)
// Value to Boolean-> Boolean(Value)

// let number=44
// console.log(typeof(number),number)
// console.log(typeof(String(number)),String(number))
// console.log(typeof number.toString(), number.toString())
// console.log(typeof(number),number)
// let bool=false;
// console.log(bool)
// console.log(typeof String(bool),String(bool))

// let mynum='Siddharth'
// console.log(typeof Number(mynum),Number(mynum))

// let bool=true;
// let bool2=false;
// console.log(typeof Number(bool),Number(bool))
// console.log(typeof Number(bool2),Number(bool2))

// let mynum='siddharth'
// let mynum2=''
// let mynum3='false'
// console.log(typeof Boolean(mynum),Boolean(mynum))
// console.log(typeof Boolean(mynum2),Boolean(mynum2))
// console.log(typeof Boolean(mynum3),Boolean(mynum3))

// let num1=0;
// let num2=90;
// let num3=-45;
// let num4=null
// let num5=undefined
// console.log(typeof Boolean(num1),Boolean(num1))
// console.log(typeof Boolean(num2),Boolean(num2))
// console.log(typeof Boolean(num3),Boolean(num3))
// console.log(typeof Boolean(num4),Boolean(num4))
// console.log(typeof Boolean(num5),Boolean(num5))
