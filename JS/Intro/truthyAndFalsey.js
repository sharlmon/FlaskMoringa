/*
Truthy or falsey
->If you know something is not falsey
then it is truthy.
falsey
1.false
2.0
3.-0
4.null
5.undefined
6.''->empty string
7.NaN->not a number
Anything that is not falsey is truthy
 truthy|| falsey -> truthy 

*/

//---> Short Circuit -> syntatical
// ---> 
let y=true ||false||true ||false
console.log("y is",y)
//y=true->
let z="" || 0 || 50 || null
// truthy || falsey || truthy || falsey
//ther first truthy value will be returned
//if no truthy value you get the last falsey 
//value
//short circuit operations.

console.log(z)
console.log("z is",z)

let k="" || -0 || null ||undefined
//k will be the last falsey value
console.log("k is ",k)

let l=123 && 0 && 50 && null
//truthy && falsey && truthy && falsey
//->if there is a falsey value
// l will be the first falsey value

//->if no falsey value
//l will be the last truthy value

let user1=""
let user2="John"


let stament1="hello"
let stement2=34
let statement3=60


/*
 ->findout if there is a truthy statement
  stament1||stament2||stament3->
  ->findout if atleaset one statment is falsey
  stament1&&stament2&&stament3

  -> findout the first falsey statement
   stament1&&stament2&&stament3
*/