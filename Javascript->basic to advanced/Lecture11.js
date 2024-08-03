// let arr=[45,56,37,90]
// console.log(arr.length)

// //Push()
// arr.push(34,23)
// console.log(arr)

// //pop()
// arr.pop()
// console.log(arr)

// //shift()   remove from front
// arr.shift()
// console.log(arr)

// //unshift()   //add elements from front
// arr.unshift(90)
// arr.unshift(45,67)
// console.log(arr)

//indexof()   //returns index if present in array
// let a=["delhi","mumbai","kolkata"]
// let result=a.indexOf("mumbai")
// console.log(result)
// let ans=a.indexOf("chennai")
// console.log(ans)

//spread operator(...) use to combine more than 2 arrays
// let a1=[34,56,78]
// let a2=[45,12,23]
// let a3=[67,10,17]
// let a4=[...a1,...a3,...a2]
// console.log(a4)

//reverse()->do changes in original array
// a4.reverse()
// console.log(a4)

//sort
// a4.sort()
// console.log(a4)

//includes()->tells whether element is present or not
// nums=[56,78,34,90]
// let num1=nums.includes(34)
// let num2=nums.includes(53)
// console.log(num1)
// console.log(num2)

//splice(start index,count of no. of elements)  //removing multiple elements
// let nums=[78,67,34,12,13,56,24]
// nums.splice(2,3)
// console.log(nums)

//adding elements
//splice(start index,count,elements to be added)
// nums.splice(2,3,78,90)   //if you don't want to delete then give 0
// console.log(nums)
// nums.splice(1,0,89,73)
// console.log(nums)


//slice(start,end)->copies a array
// let marks=[78,45,23,100,90,83,50]
// let copymarks=marks.slice();
// let copymarks2=marks.slice(2,5);  //5 not included
// console.log(copymarks)
// console.log(copymarks2)
