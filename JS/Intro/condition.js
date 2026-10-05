/*
 Conditions->
 control the flow of the code by making a decision

 condition operators->
 if, else if and else

 Syntax:
 if you want to use if
  if(<condition goes>){}
  Golden Rule-> if the condition is truthy
  then it will execute code in /{}/

  if the condition is falsey then
  it will not execute the code in /{}/

  Any questions -> examples
*/

/*
senario 1:
   1.declare a variable<of your choice>assign a truthy value
    create an if stament and put the variable 
    inside the if statement condition(<variable>).in side the if
    console.log("Senario 1 it run")
senario 2:
   1.declare a variable<of your choice>assign a falsey value
    create an if stament and put the variable 
    inside the if statement.in side the if
    console.log("Senario 2 it run")
senario 3:
   1.create an if statement inside the if stament condition
   part. have true.
   inside the block({}) console.log("Senario 3 it run")
senario 4:
   1.create an if statement inside the if stament condition
   part. have false.
   inside the block({}) console.log("Senario 4 it run")
senario 5:
   1.create an if statement inside the if stament condition
   part.10>20
   inside the block({}) console.log("Senario 5 it run")
senario 6:
   1.create an if statement inside the if stament condition
   part. have 20>10.
   inside the block({}) console.log("Senario 6 it run")
*/

//Senario 1
const myChoice="My dress my choice" //23

if(myChoice){
    console.log("Senario 1 it run")
}

//senario 2
let myChoice2; // undefined
if(myChoice2){
     console.log("Senario 2 it run")
}
//sanario 3
if(true){
    console.log("Senario 3 it run")
}
//sanario 4
if(false){
    console.log("Senario 4 it run")
}
//sanario 5 false
//let x=10>20 false
if(10>20){
    console.log("Senario 5 it run")
}
//
if(20>10){
    console.log("Senario 6 it run");

}