/*
Loops: run a block of code over and over again
you should not loop <infinity>:but
an exit condition
syntax:
 while(<condition>){
  //block of code
 }
  // condition it truthy=>continue
  // exit if condition is falsey:<false>

//Counter its at 0-> 100
//
*/

// count to 100// 1000 //x
// let n = 0;
// let condition = true;
// //condition=> falsey: we automatically exit the loop
// //counting up->
// while (condition) {
//   //2
//   if (n > 2) {
//     //2>2 false
//     condition = false;
//   }
//   console.log("n is", n); // 3
//   n = n + 1; //2+1=3
//   console.log("n is", n); //4
// }
/*
 -> big 0 notation-> 
 -> 
*/

// iteration 1->
// recusive<advanced>->loop
// loop->recusive
// recusive:<call stack:17314> // cycles stack works loop

/*
 create a function <any name>
 the function should take a paremeter 
 @param is number greater than 0;
 have a loop inside  that counts down from this number
 use while loop. it shoud print n:
*/

function countDown(n) {
  //let condition = true;
  //while(n >0)//
  while (true) {
    console.log("n is ", n);
    n = n - 1;
    if (n < 0) {
      //break exist loop
      return; //exits function
    }
  }
  //otside loop
  console.log("contdown done");
}
/*
 -> options you have 
 ->put condition directly in your while loop:
   -remove extra variable
 ->put condition to true and use break statement
    =break stament exits the loop
 ->since loop is inside function.
   exit the whole function using return statement
*/

/*

Kindergarten teacher want s to generate a maths table
for the strudent. this table is dynamic
use for loop
create a funciton @function1<give it any name>.
   it does not take any parameters
   this function 
   1.prompts a user for the first number
   check if number is a valid number greater than 1.
   2.prompts a user for the second number
   check if number is a valid number greater than 1.
   use recussion or a while loop to ensure 
   user enters a correct number for number1 and number 2
   after the number is enterd call @function2<>
   which takes the numbers as parameters.
   example-> @function2(number1,number2)

create a funciton @function2<give it any name>.
    this funciton takes in the following parameter
    @param1 number greater than 1.
    @param2 number greater than 1.
    check if @param1 is a number greater than 1.
    check if @param2 is a number greater than 1.
    example if @function2(3,5)
    create a maths table for it. upto 
    ie console logs
    -----
    3*5=
    3*4=
    3*2=
    3*1=
-------
    2*5=
    2*4=
    2*3=
    2*1=
-------
    1*5=
    1*4=
    1*3=
    1*2=

*/
function promptStudent() {
  let num1 = null;
  let num2 = null;
  while (true) {
    num1 = prompt("Enter the first number");
    if (isNaN(num1)) {
      continue; //restart the loop
    }
    num2 = prompt("Enter the second number");
    if (isNaN(num2)) {
      continue; //restart the loop from begining
    }
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (num1 <= 0 || num2 <= 0) {
      continue; //
    }
    break;
  }
  console.log("Got valid number", num1, num2);
  mathTable(num1, num2);
}

function mathTable(num1, num2) {
  if (!num1 || num1 < 0 || !num2 || num2 < 0) {
    console.error("Ensure number1 or number2 are numbers greater than 0");
    return;
  }

  let outerLoop = num1; //2

  // while (outerLoop > 0) {
  //   doInnerLoop(outerLoop, num2); //
  //   outerLoop = outerLoop - 1;
  // }
  while (outerLoop > 0) {
    let innerLoop = num2; //3 //3
    while (innerLoop > 0) {
      console.log(`outerLoop=${outerLoop} innerLoop=${innerLoop}`);
      console.log(`${outerLoop}*${innerLoop}=${outerLoop * innerLoop}`);
      innerLoop = innerLoop - 1;
    }
    outerLoop = outerLoop - 1;
  }
}

//individual//test separate
function doInnerLoop(outerLoop, num2) {
  let innerLoop = num2;
  while (innerLoop > 0) {
    console.log(`outerLoop=${outerLoop} innerLoop=${innerLoop}`);
    console.log(`${outerLoop}*${innerLoop}=${outerLoop * innerLoop}`);
    innerLoop = innerLoop - 1;
  }
}
