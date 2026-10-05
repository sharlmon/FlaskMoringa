
/*
 Numbers.
 floating point number:<decimal place>
 real numbers
 positive
 negative numbers
*/

let number1=23; //real number
console.log(number1)
let number2=34.34; //floating point number
console.log(number2)
let number3=-34 // negative number
console.log(number3)
//biggest number 1.7976931348623157 × 10^308z

/*
 strings-> store sequence of characters
 3 ways of creating a string
 1.Double quote string
 2.Single quote string
 3.Back Ticks:<Template string>
   -->multine string
*/
/*
 special -> \t >tab      
 newline -> \n
 single quote escape-> \'
 double quote escape-> \"
*/
let str1="Double \n quote I am Daniel"//double quotes
console.log(str1)
let str2='Single Quote I am  daniel'//Single quote
console.log(str2)
let str3=`Back Ticks I am daniel `//Back Ticks
console.log(str3)
let str4="23" //string or a number:<String>
console.log("23 is a string  Don't")
/*why do we multiple ways of representing a string*/
let str5='Daniel said "23 is a number"'
//let str5='Daniel said '23 is a number''
let str6=`
 Multi line string
 Multi line strings
 "" '' both single and double quotes
 Don't
`
let str7='Don\'t do this any more '


/*Boolean represent true or false */
let johnIsMale=true //true value
console.log(johnIsMale)
let johnIsMarried=false
console.log(johnIsMarried)


/*
 Null-> lack of a value
 ie absense of a value

*/

let nullVal1=null
console.log(nullVal1) //null

/*
 Undefined -> lack of a value ie absense of a value
 what is the difference between undefined and null

 ***--> never explicitly set something to undefined
 If you want to create a variable that does not have
 a value never use undefined use null
*/

let undefinedVal1=undefined //dont do this
console.log(undefinedVal1)//undefined
let undefinedVal2; // js engine set to undefined
console.log(undefinedVal2) //undefined
//

//null -> undefined
let customerAge=null
//calculate based of birth
//account for leap year
patientDetails=null
//connect to a server->sha 4 seconds
//patientDetails null-> waiting 
// patientDetails->object :received the data
// patientDetails ->undefined :<JS code something went wrong>