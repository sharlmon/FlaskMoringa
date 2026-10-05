/*
 Template or string interpolation
 is a way to combine data and strings for ouput.
*/

/*
 Excercise make one string with eveything about
 this person
*/

//Normal string concatination

let fistName="Samuel"
let secondName="Jane"
let age=20
let address="Juja County"

let userDetails=fistName+" "+
secondName+" is "+age+" years old"+
" and he stays at "+address 
//fistName sencod is 23 and he sta
console.log(userDetails)
console.log("User details is ",typeof userDetails)

//Template string use back ticks
let userDetails2=
`${fistName} ${secondName} is ${age} years old and he stays at ${address}`;
console.log(userDetails2)
console.log(`${typeof userDetails} ${34+50}`)
console.log(`${fistName} ${secondName} is ${age} years old and he stays at ${address}`)

