//function expression
//named function->when function is stored inside a variable
// let namedfunc=function name(){
//     //block of code
// }

//call that function
// namedfunc()

//anonymous function
// let anonymousfunc=function(){
//     //block of code
// }

// anonymousfunc()

//arrow function(most important)

//if multi line->use curly braces
// let arrowfunc=(user)=>{
//     console.log(`my name is ${user}`)
//     console.log("He works hard")
// }

//one liner
// let myfunc=()=>console.log("How it does?")

// arrowfunc("Siddharth Shukla")
// myfunc()


//IIFE->immediately invoked function expression

// (function(){
//     console.log("This is best function")
//     console.log("Immediately calls")
// })();


//nested function
// function outer(){
//     inner()
//     console.log("This is outer1")
//     function inner(){
//         console.log("This is inner")
//     }
//     inner()
//     console.log("This is Outer 2")
// }
// // inner()  will give error
// outer()

//to count no. of vowels
function countvowels(str){
    const vowels="aeiouAEIOU"
    let count=0
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count
}

console.log(countvowels("I am a good boy"))