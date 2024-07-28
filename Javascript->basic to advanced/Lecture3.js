//scopes
//global scope
//local scope
//function scope->works with var keyword
//block scope->let and const keyword

//global scope
// var a=123
// function globalscope(){
//     console.log(a)
// }

// globalscope()
// console.log(a)


//block
{
    //only accessible inside this
    var a

}

// function localscope(){
//     let b=34;
//     console.log(b);
// }
// console.log(b)   //will give erroe of not defined
// localscope()

//function scope

// function functionscope(){
//     if(true){
//         var c=90;
//         console.log(c)
//     }
//     console.log(c);
// }
// // console.log(c);   this will give not defined error
// functionscope();


//block scope
function blockscope() {
    if (true) {
        let l = 89;
        const b = 90;
        console.log(l)
        console.log(b)
    }
    //console.log(l)    // will give error of not defined(since it is a block scope variable)
    console.log(b)      //will also give same error
}

blockscope()