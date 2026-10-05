/*
-> callback Function-> <please call me.>
-> call back-> function please call me ->call the function
->A funciton that takes one or more parameters as function 
  *one of or more of the parameters are functions
*/

/*
 ->we will observe existing call back function
*/

/*
 -> Task
 create a funciton that prints an alert for the current time.
 -does not take any parameters
 -prints alert or console.log-> current times stamp
 -test your funciton by calling it.
*/
function showCurrentTime() {
  //
  const currentTime = new Date();
  console.log(`current time is ${currentTime}`);
}

/*
 1.Named function
 2.Anonymous Function:<remove the named function>
 3.Arrow function<>
 ->pass all function by reference<stament>
 -> if you use an expression you wrong
*/

//=> call it to execute all the variables executes a fress
//1 -> 3000
let k = 0;
let invT = setInterval(() => {
  //
  if (k >= 5) {
    clearInterval(invT);
    return;
  }
  const currentTime = new Date();
  console.log(`current time is ${currentTime}`);
  k = k + 1;
  console.log("k is", k);
}, 2000); //js function

function remindCreateAccount() {
  alert("You like our site please create an account");
}

setTimeout(remindCreateAccount, 10000);
//clearTimeout
// delay in execution->

//setTimout
// deleay execution=>
//website -> create immedit 10 min
/*
 setTimout(param1,param2)
 // param1 funciton to be executed
 //param 2 is the time in millisence
 //onces

*/

//syntatical sugar=> 90%
//-->setInterval(showCurrentTime,5000)//named function
// 3seconds function showCurrentTime=>
// callback function ->
/*
 1.use the set interval with a named function
*/

// inbuild funciton call setInterval

/*
 setInterval(param1,param2) 

 param1 is a funciton-> 
 param2 is time in milliseconds =>

after 3 seconds= 3000 milliseconds
param 1=function to be called after every 3 seconds

 */

/*
excersise-> seen setInterval from js working.
can we now create our own call function
*/
