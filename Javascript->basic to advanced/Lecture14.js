//objects
// let obj={}
// console.log(obj)
// console.log(typeof obj)
//in the backend will be stored as string datatype
// let obj1={
//     key:"value",
//     key2:"value"
// }
// console.log(obj1)
//object inside object
let mydetails={
    name:'siddharth shukla',
    course:'b.tech cse',
    age:21,
    male:true,
    subjects:{
        dsa:"TCS",
        careerskills:"XCS",
        maths:"TMA"
    },
    "train no":14114
}
// console.log(mydetails)

//accessing data

//->by dot notation
//->by bracket
// console.log(mydetails.name)
// console.log(mydetails["name"])
// console.log(mydetails.course)
// console.log(mydetails["course"])
// console.log(mydetails.age)
// console.log(mydetails["age"])
// console.log(mydetails.male)
// console.log(mydetails["male"])
// console.log(mydetails["train no"])  //can't access it by dot notation
//modifying the value
// mydetails.course="B.Tech Computer Science and Engineering"
// console.log(mydetails)
//adding a key value pair
// mydetails.pet=false
// console.log(mydetails)
//deleting a key value pair
// delete mydetails['train no']
// delete mydetails.pet
// console.log(mydetails)

// console.log(mydetails.subjects)
// console.log(mydetails.subjects.dsa)
// console.log(mydetails.subjects["careerskills"])
//optinal chaining to prevent errors
/*
Optional chaining (?.) is a feature in JavaScript that allows you to safely access deeply nested properties of an object without having to explicitly check if each reference in the chain is valid. It short-circuits and returns undefined if any part of the chain is null or undefined, which helps prevent runtime errors. */
// console.log(mydetails.subject?.maths)
// console.log(mydetails.subjects?.maths)

//using for loop
// for(let key in mydetails){
//     console.log(key,mydetails[key])
// }

let person=new Object()  //creating object through constructor
person.name="rahul"
person.price=789
console.log(person)

