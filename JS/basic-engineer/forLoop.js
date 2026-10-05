/*
---> for loop-> mostly ment for numbers
-- combination of using while for number
 loops: 1:start point, 2:condition , 3:after each itteration
 combines it into one stament
 for(startpoint;condition;each-itteration){
  
 }

*/

//use this while loop to make a for loop

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

/*
 for loop->neat packgate
*/

function mathTable(num1, num2) {
  if (!num1 || num1 < 0 || !num2 || num2 < 0) {
    console.error("Ensure number1 or number2 are numbers greater than 0");
    return;
  }
  // let condition = true;
  for (let i = 1; i <= num1; i++) {
    for (let j = 1; j <= num2; j++) {
      console.log(`${i}*${j}=${i * j}`);
    }
  }
  // for (let i = num1; num1 >= 0; i--) {
  //   for (let j = num2; num2 >= 0; j--) {
  //     console.log(`outerLoop=${i} innerLoop=${j}`);
  //     console.log(`${i}*${j}=${i * j}`);
  //   }
  // }
}
