/*
 comparison operators.
 Comparison operators evaluate to only true or false.
 -> 
 for &&, or ->they work with truthy and falsey
*/

/*
 And -> && 
 truth table -> all posible combinations
 val1 and val2
 combinations are
 val1 && val2
 val2 && val1

 -> for and all statments have to be true for
 it to be true.
*/


let val1=true
let val2=true
let result1=val1&&val2

console.log(`val1=${val1} val2=${val2} val1&&val2=${val1&&val2}`)

let mercy_age=15
let mercy_balance=50000

//if mercy is age is greter than 18 and has more thna 20k in  her account
let is_greater_than_18=mercy_age>18 //true or false
console.log(`Is mercy age greater than 18 ${is_greater_than_18}`)
let has_more_than_20k=mercy_balance>20000
console.log(`Mercy has more than 20k ${has_more_than_20k}`)
console.log(`mercy is age is greter than 18
     and has more than 20k in  her account
     ${is_greater_than_18&&has_more_than_20k}
     `)
//mercy_age>18&&mercy_balance>20000
let simplified=mercy_age>18&&mercy_balance>20000
console.log(`simplified ${simplified}`)
console.log(`further simplification is ${mercy_age>18&&mercy_balance>20000}`)

console.log(`mercy is age is greter than 18
     or she has more than 20k in  her account
     ${is_greater_than_18||has_more_than_20k}
     `)

/*
 Or ateleast one stament has to be true for the whole stament ot be true
*/
console.log(`This is not true = ${!true}`)
console.log(`This is not false = ${!false}`)

let x=23>12 || 10>2 || mercy_age>18 && mercy_balance>20000
// false || 10>2 || mercy_age>18 && mercy_balance>20000
//
//true && false && true=?false

//false ||true ||(true&&false)

// and is evalulated firt then false 
//Order of evaluation is Not-> then And -> Or