/*
  
lets start with if .
  * its special. 
  * you can use it on its own.
*/

/*
 ->If is independent. 
 one statement does not depend on another.
*/

/*
 -> its not practical
 -> else if->

*/

//->free to enter any age
//->Hope -> bible ->
//->POut number

/*
 bugs ->
 radiation -> mutplier -> safest 10 more
 hope-> Specific ->
 
*/

let age = prompt("Enter your age:");
//
console.log(`age is ${age} typeof ${typeof age}`);
alert(`You entered ${age}`);
//NaN
//+age ->syntatical
//isNaN, Number , +
// age=15
//15>10:true

/*
 Work on this bit->
 using if statments only to ensure we get only one alert for age.
 must be correct one.
*/

if (age > 10) {
  alert("You are a baby.");
}
//15>13=true
if (age > 13) {
  alert(`You are a teen`);
}
//15>18=false
if (age > 18) {
  alert("You can legally drink and smoke");
}
//27>27=false
if (age > 27) {
  alert("Best age for marriage");
}
//27>45=false
if (age > 45) {
  alert("Best age for retiremnt");
}
//27>50=false
if (age > 50) {
  alert("You are an ansestor");
}
