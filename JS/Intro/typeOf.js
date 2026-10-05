/*
 the type of is just to tell you the variable type.
 ->number 
 ->string
 ->boolen
 ->null
 ->undefined
*/

let numb1=749
console.log("numb1 ",numb1 ," Its type is ",typeof numb1)
let strNumb="854"
console.log("strNumb ",strNumb ," Its type is ",typeof strNumb)
let myName="John"
console.log('My name is ',myName," Its type is ",typeof myName)
let isMarried=true
console.log("isMarried ",isMarried," ITs type is ",typeof isMarried)
let nullVal=null//type of <null> object ->
console.log("nullVal ",nullVal," ITs type is ",typeof nullVal)
let unValue;
console.log("unValue ",unValue," ITs type is ",typeof unValue)


const bonus="200"
const sallary=50000

const sallaryGross=bonus+sallary; //instruction

//console.log(sallartGross) !-> more information
console.log("Gross salary is ",sallaryGross,"its type ",typeof sallaryGross) //->more helpfull
//Tax calcultions
const paye=sallaryGross*0.16
console.log("For gross sallary of ",sallaryGross," Paye is",paye)
//->
const nhif=2500
console.log("Nhif deduction ",nhif)
const sha=2500
console.log("SHA is ",sha)
const totalDeductions=paye+nhif+sha
console.log("Total deduction are ",totalDeductions)
const netSallary=sallaryGross-totalDeductions
console.log("Your net sallary is ",netSallary)