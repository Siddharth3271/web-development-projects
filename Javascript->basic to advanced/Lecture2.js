//variables
// a=45;
// console.log(a)

//variables can be declared in three ways
//var,let,const

// var a;  //declared variable a
// a=45;   //initialization

// var a=45;

var courseName = "javascript";   //can be redeclared as well as assigned
let courseId = 123;
const Department = "Computer Science";  //this can't be reassigned as well as redeclared
console.log(courseName);
console.log(courseId);
console.log(Department);

console.table([courseName, courseId, Department]);

courseName = "C++";    //can be redeclared
courseId = 234
// Department="Engineering"
// console.log(courseName);
// console.log(courseId);
// console.log(Department);


//let keyword(block scope)
//var keyword(function scope)
// let courseId=900;  will give error(can't be redeclared) but can be reassigned