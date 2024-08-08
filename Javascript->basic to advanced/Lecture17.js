let nums=[7,4,8,2,3,1,9]
//map()
// function double(nums){
//     return nums*2
// }
// let doubles=nums.map(double)

// let doubles=nums.map(function double(nums){
//     return nums*2
//})
// let doubles=nums.map(function(nums){
//     return nums*2
// })
// let doubles=nums.map((nums)=>{
//     return nums*2
// })
// let doubles=nums.map((nums)=>nums*2)
// console.log(doubles)

//filter()
// let number=nums.filter((num)=>{
//     if(num>5){
//         return num
//     }
// })
// console.log(number)

//reduce()->reduce array to one value according to our choice
// let val=nums.reduce((accumulator,currentvalue)=>{
//     accumulator+=currentvalue
//     return accumulator;
// },0)
// let val2=nums.reduce((accumulator,currentvalue)=>{
//     accumulator*=currentvalue
//     return accumulator;
// },1)

// console.log(val)
// console.log(val2)


//chaining concept(combining methods)
// let sums=nums.filter((num)=>{
//     return num>=5
// }).reduce((acc,currval)=>{
//     return acc+=currval
// })
// console.log(sums)

let employees=[
    {id:1,name:"siddharth",course:"b.tech",subject:"dsa",year:2022},
    {id:2,name:"rahul",course:"mba",subject:"marketing",year:2024},
    {id:3,name:"rohan",course:"bca",subject:"dbms",year:2019},
    {id:4,name:"karan",course:"b.tech",subject:"python",year:2021},
    {id:5,name:"ramesh",course:"bcom",subject:"accounts",year:2012}
]

// let Course=employees.map((emp)=>{
//     return emp.course
// })

// console.log(Course)

// let Year=employees.filter((emp)=>{
//     return emp.year>=2020
// })
// let Year=employees.filter((emp)=>{
//     return emp.year>=2020
// }).map((name)=>{
//     return name.name
// })
// console.log(Year)

let total=employees.reduce((acc,currval)=>{
    return acc+currval.year
},0)

console.log(total)