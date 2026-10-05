/*
 A recusive function is a function that calls itself.
 -> since this creates an endless loop you need to find a way
 to terminate. That is using a return statement  and if <condition>
*/

function salaryGrossPromptProcess(attempt = 0) {
  let gross = null;
  if (attempt == 0) {
    gross = prompt("Enter your gross salary");
  } else {
    gross = prompt(
      `${attempt + 1} Invalid gross salary entered. enter a  number for gross salary.try again.`,
    );
  }
  if (isNaN(gross) === false) {
    //condition is met
    console.log(`You entered this amount ${gross} exiting`);
    return; // exit a function
  }
  salaryGrossPromptProcess(attempt + 1);
}
//salaryGrossPromptProcess();

function maxStack(n = 0) {
  console.log(`N is at ${n}`);
  maxStack(n + 1);
}

/*
loops => recusive<almost function like loop>
=>badly end<> mostly restart: all the memory=>
//problem that required a loop =>
//=>stack=>recusive funciton <stack overflow:exit condition>
*/

/*
 1.remove the alert=>
 2. initial prompt should be enter your gross salary
 3. any prompot after that should be `Invalid gross salary entered. enter a  number for gross salary.try again`

*/

/*
  create  a function to calculate the factorial of a number.
  the function takes a paremeter 
  -@param1 which is a number and returns the factorial of the number
  example. factorial(5) output 120
  // 5*4*3*2*1
  // 20*3*2*1
  //60*2*1
  //120*2
  // check the number entered is greater 1-> 
  //hint use a recusive function-> 
*/

//factorial(5)
function factorial2(n = 1, lastSolution = 1) {
  //end condition
  //5<=1:false //4<=1 false
  //3<=1 false
  //2<=1 false
  //1<=1 true
  if (n <= 1) {
    return lastSolution; //120 exit
  }
  //5*1=5//4*5=20 // 3*20=60 //2*60=120
  const newSolution = n * lastSolution;
  const newN = n - 1; //5-1//4//4-1=3//3-1=2//2-1=1
  //factorial(4,5)
  //factorial(3,20)
  // factorial(2,60)
  //factorial(1,120)
  factorial(newN, newSolution);
}

// call stack
function factorial(n) {
  if (n < 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

/*
factorial(1)->1
factorial(2)->2
factorial(3)-3
 factorial(4)-4
 factorial(5)-5
*/
