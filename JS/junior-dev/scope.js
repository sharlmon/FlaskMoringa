/*
 procedure. 
 1.declare variable name in the global scope.
 2. create function call sayMyName
   console.log("the name and line number")
   -rember to call the function
 3.declare variable name inside the function.
  at the start
   assign it a different name. print our the name 
   and line number
4. create an if statement:inside the function  pass a truthy 
  condition of your choice.
  inside the block console.log name
  and its line number
5.inside the first if statement at the start
 declare variable name give it a new name.
console.log name and line number.
6.inside the function after the if block
 console.log name and line number.
7.Try declaring the same variable name 
 in the same scope.
*/

/*
 {}-> block
 function {},if {},for {},while {}
*/

let name = "Samson";

function sayMyName() {
  let name = "Maggy";

  console.log(`name ${name} line ${15}`);
  if (true) {
    let name = "Delilah";
    let y = 34;
    console.log(`name ${name} line ${26}`);
  }

  console.log(y);

  function myName() {
    // let name = "John";
    console.log(`name ${name} line ${42}`);
  }

  console.log(`name ${name} line ${32}`); //Maggy
}
sayMyName();
myName();
console.log(y);
