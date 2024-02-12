// let num = 78 //number
// console.log("number",num)

// let str = "my name is anjali" //string
// console.log("str", str)


// let bigInt = BigInt("47856347563477777777777777777777777777") //bigInt
// console.log("BigInt", bigInt)

// let boolean = true  //boolean
// console.log("boolean", boolean)

// let myNum;   //undefined
// console.log("undefined", myNum)

// let nul = null   //null
// console.log("null", nul)


// let arr = [34,67,45,78, "anjali", "adarh"] //arr
// console.log(arr.length)
// console.log(arr[5])
// console.log("array", arr)


// let obj = {
//     name : "anjali",
//     age :23,
//     city : "Delhi",
//     dob : "15 sept 2000",
//     isMarried : false
// }

// let person = {
// name : {
//     firstName : "Anjali",
//     lastName : "Singh"
// },
// age : 23,
// city : "delhi"
// }
// console.log(obj)


// let student = {
//     name : 'anjali',
//     age :23,
//     courses: [
//        {
//         courseName: "javscript",
//         courseCredits : 8
//        },


//        {
//         courseName: "python",
//         courseCredits : 6 
//        }
//     ]
// }

// console.log(student.courses)
// console.log(student.courses[0])
// console.log(student.courses[1].courseName)

// console.log(student.name)
// console.log(student.courses[1].courseName)


// const myName = "Alice"
// console.log(myName)
// console.log(`Hello ${myName}`)

// const myName = prompt("Plaese Enter Your Name")
// alert(`Hi ${myName}`)

// let age =parseInt("21") +32
// console.log(typeof age)
// console.log(age)


// console.log(7>3)
// console.log(56<306)
// console.log(3==="3")

// let a = 4
// let b = 12
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)

// let count = 2
// console.log(count--)
// console.log(count)


// let age = 46

// if(age<21){
//   console.log('you can not cast the vote')  
// }
// if(age===21){
//     console.log("you can cast the vote")
// }
// if(age >21){
//     console.log("You can also cast the vote")
// }

// let drivingLicense = false

// if(drivingLicense===true){
//     console.log("You can drive")
// }
// else {
//     console.log("you can not drive")
// }
 

// let weatherCondition = "Cloudy"
// let subCondition = "Too Hot!"

// if(weatherCondition==="Cloudy"){
//   console.log("Take the Umbrella")  
// }else if(weatherCondition === "Rainy"){
//     console.log("Use the Umbrella")
// }else if(weatherCondition=== "Sunny"){
//     if(subCondition==="Too Hot!"){
//         console.log("Use the umbrella")
//     }else{
//       console.log("Dont use the umbrella")  
//     }
// }else{
//     console.log("Dont take the umbrella")
// }


// let age = 7
//  age >21 ? console.log("You can drive") :  console.log("You cannot drive")


//  let age = 15

//  if(age > 60){
//     console.log("Senior Citizen")
//  }
//  else if(age < 18){
//     console.log("Minor")
//  }else{
//     console.log("Adult Citizen")
//  }


//  if(0===true){
//     console.log(true)
//  }else {
//     console.log(false)
//  }

// let age = prompt("Enter your age")
// let newAge = parseInt(age)
// if(newAge%2===0 &&  newAge>30){
//     console.log(true)
// }else {
//     console.log(false)
// }

// for(let i=0; i<=5; i++){
//     console.log(i)
// }

// let itr = 1
// while(itr<=5){
//     console.log(`Iteration ${itr}`)
//     itr++
// }

// let n = prompt("Enter the number")
// n = parseInt(n)

// let factorial = 1

// for(let i=1; i<=n; i++){
//  factorial= factorial*i 
// }
// console.log("factorail",factorial)

//functions

//arrow function
// const name = (name)=>{
// console.log(`Hello ${name}`)
// }

// name("anjali")
// name("rahul")

// // let a = 5
// // let b = 12
// // console.log(a+b)

// const sum = (a,b)=>{
// return a+b
// }

// console.log(sum(89,100))

// function subtraction(a,b){
//   return a-b
// }

// console.log(subtraction(12,5))

// const greet = function(name){
//   console.log(`hello ${name}`)
// }

// greet("Babu")




// const fun= ()=>{
//   console.log("before return")
//   return
//   console.log("after return")
// }

// fun()


// const nameLength = ()=>{
//   let name = prompt("Enter your name")
//   console.log(name.length)
// }

// nameLength()

// const sum = (a,b)=>{
//   return a+b
// }

// console.log(sum(45,67))

// const checkIfThirsty= (state, callBackFun)=>{
//   if(state === "Thirsty"){
//     callBackFun()
//   }else{
//     console.log(state)
//   }
// }

// const drinkWater =()=>{
//   console.log("Please drink water")
// }

// checkIfThirsty("Not Thirsty", drinkWater)



// const isAgeOdd=(age, callBackFun)=>{
//   if(age%2===0){
//     console.log("even age")
//   }else{
//    callBackFun(age) 
//   }
// }

// const printAge= (age)=>{
//   console.log(age)
// }

// isAgeOdd(2, printAge)



// {
//   let nam= "anjali"
//   console.log(nam)
// }

// console.log(nam)


const greet = (name)=>{
return `Hello ${name}`
}

//invoking the function
console.log(greet("Babu"))

const isEven=(n)=>{
  if(n%2===0){
    return true
  }else{
    return false
  }
}

console.log(isEven(3))

const factorial = (n)=>{
let fact=1
for(let i=1; i<=n; i++){
fact= fact*i
}
return fact
}

console.log(factorial(5))




