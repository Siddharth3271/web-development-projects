//recursion
// let i=5
// function recursive(){
//     if(i==0){
//         return
//     }
//     console.log("This is recursion")
//     i--
//     recursive()
// }

// recursive()

function factorial(n){
    if(n===0 || n===1){
        return 1
    }
    let fact=n*factorial(n-1)
    return fact;
}

console.log(factorial(5))