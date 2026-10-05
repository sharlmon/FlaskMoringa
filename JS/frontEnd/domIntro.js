/*
DOM<Document Object Model>
  -Link Html to JS
  -DOM only works in js for browsers.
Dom properties and Dom methods
  -->Accessing elements 
      1.getElementById
      2.getElementByClass
      3.querySelector<single element> 
        -id:#
        -class:.
        -tag:eg p
    4.querySelectorAll<an array>
-->Update The Dom
    1.inner html<>
    2.inner text<>
-->Event Listners.
   
*/

/*
The Dom properties 
   -getElementById And Dom Property<by its id>
   -getElementByClassName
*/

const div1 = document.getElementById("div1");
const div2 = document.querySelector("#div1"); //
console.log(div2);
//p
const listItems = document.getElementsByClassName("list-item");
const queryListItems = document.querySelector(".list-item");
const queryListItemsAll = document.querySelectorAll(".list-item");
//listItems:Array
console.log(listItems);
/*
query Selector.<JACK OF ALL TRADES>
  -by tag <p> 
  -by id
  -by class

*/
