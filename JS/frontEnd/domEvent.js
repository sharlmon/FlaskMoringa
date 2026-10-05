/*
 Events ->
 if something happens i want to be notified.
 -callback<>
 Sensor ->

->click
->hovers
->type

*Before attaching an event. you be able to access the element*

*/

/*
 create a button.
 1.attach a click event which shows an alert
 2.attach a mouseover which console.log the current date 
 for each of the events print the event. ie console.log(event)
*/

function clickAlert(e) {
  console.log(e); //dom element that the event occured on
  alert("Hi button was clicked");
}

function mouseOverAlert(cats) {
  console.log(cats);
  console.log("Mouse over", new Date());
}
/*
 querysElector,getElementById
 //
 addEventListener(@param1,@param2)
 @param1->event(click,mouse-over etc) as string
 @param2->callback(e)=> e is a dom element
*/
document
  .querySelector("#btn-event-checker")
  .addEventListener("click", clickAlert);

document
  .querySelector("#btn-event-checker")
  .addEventListener("mouseover", mouseOverAlert);

/*
 We can attach an event to window<active tab>
 for on mouseMove and print out the co-ordinates of the mouse.

 have x and y cordinates being display on the screen when someone moves.
*/

window.addEventListener("mousemove", (e) => {
  //console.log("x direction", e.clientX);
  //console.log("y direction", e.clientY);
  document.getElementById("x-b").innerText = e.clientX;
  document.getElementById("y-b").innerText = e.clientY;
});
