/*
 if and else if -> chain
 -> we exit if and else if when we reach  the first truth
*/

let age = prompt("Enter your age:");
//
console.log(`age is ${age} typeof ${typeof age}`);
alert(`You entered ${age}`);
// age=27
//27>10 :true->
//11<10 -> false
//11<13 ->true
if (age < 12) {
  alert("You are a baby.");
} else if (age < 18) {
  alert(`You are a teen`);
} else if (age < 27) {
  alert("You can legally drink and smoke");
} else if (age < 45) {
  alert("Best age for marriage");
} else if (age < 50) {
  alert("Best age for retiremnt");
} else {
  alert("You are an ansestor");
}
