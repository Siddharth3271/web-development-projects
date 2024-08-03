//functions
//work on dry principle(DO NOT REPEAT YOURSELF)

function name(){
    //block of code
    console.log("Function is called")
}

// name()
// console.log(name())   will print undefined

function add(a,b){   //parameter
    return a+b;
}

console.log(add(5,8))  //argument

function createUser(name, age) {
    return {
        name: name,
        age: age
    };
}

const user = createUser("Alice", 30); // user is { name: "Alice", age: 30 }
console.log(user); // Outputs: { name: "Alice", age: 30 }
