const age = 30;
// key:age,
const car = {
  age,

  name: "Peugeot 504",
  model: "504 L saloon",
  color: "Jungle Green",
  top_speed: "160km/h",
  504: "Lion of Africa",
  engine_information: {
    name: " 1.8L inline-4 (XC5) ",
    cylinder: 4, //
    dispacement_per_cylinder: 96,
  },
  manufacture: {
    name: "Peugeot",
    aka: "Pegot",
    country: "France",
  },
  null: "this is null",
  logThis: function () {
    console.log(this);
  },
  alert_info: function () {
    alert(`Car:${this.name}
         model:${this.model}
         color:${this.color}
         top_speed:${this.top_speed}
        `);
  },
  "fun fact": `
   First car to cross the sahara desert.
   no reverse parking near banks.
   No air bags you die like real men.
  `,
};

/*
 data types<object>
 1.confirm that you are able to print the object
 and also its type
*/

// console.log(`Car datatype ${typeof car}`);
// console.log(car);
// console.log("--using console.log(table)--");
// console.table(car); //try this

/*
access individual parts of your object.
2 ways of accessing object properties
  1.dot notation<does not work for everything but looks good>
    -does not work for properties which are 
         -numbers
         -can only access properties that follow variable naming rules
  2.bracket notation<will work for eveything:looks>
    -*access properties using variables.*

For each property of your object.includes nested ones
 access it using both 
dot notation and bracket notation.
print the value and also print its type

Hint for nested properties use example. car.manufacture.name or car["managurcture"]["name"]
*/
//car and its name using dot notation
//console.log(car.fun fact)
// car["fun fact"];
// car.504
//car[504]; //bracket <universal accessor>

/*
 Update object data.
 Before you can update you need to be able to access the data.
 -dot notation and bracket notation.
*/
