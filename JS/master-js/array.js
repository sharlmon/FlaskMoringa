/*
 Arrays are just objects.
 ->specialized.<objects>
 key<number,string,null,undefined,boolean>:
 value:<Any data type>
 an array and a normail object.
 the keys are sequential.<0 upto n> based on
 values
 ->when accessing array element s
 use only bracket notation.
 the keys are numbers

 <[value,value2,xxxx]>
 since the keys are numbers and are sequential
 there are not provided.
*/

const car = {
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

let array1 = [
  "Peugeot 504",
  "504 L saloon",
  "Jungle Green",
  "160km/h",
  "Lion of Africa",
  {
    name: " 1.8L inline-4 (XC5) ",
    cylinder: 4, //
    dispacement_per_cylinder: 96,
  },
  {
    name: "Peugeot",
    aka: "Pegot",
    country: "France",
  },
  function () {
    console.log(this);
  },
  function () {
    alert(`Car:${this.name}
         model:${this.model}
         color:${this.color}
         top_speed:${this.top_speed}
        `);
  },
  `
   First car to cross the sahara desert.
   no reverse parking near banks.
   No air bags you die like real men.
  `,
  [10, 22, 30],
];

/*
 HAVE ALL YOUR CAR VALUES FROM CAR OBJECT INSIDE THE ARRAY.
 ->add final element which is an array with your favourite numbers.
 ->ACCESS USING THE ARRAY ALL ITEMS.<DONT USE LOOP>
 ->use bracket notation
*/
//array length<size>
//array[0]
//loop to access all the elements.
// start an array starts at 0.
//end point ->any size//3 //20<>
for (let i = 0; i < array1.length; i++) {
  //0 to 20
  console.log("i is", i);
  console.log(array1[i]);
}

/*
Array methods.<functions are in built>
-push 
-pop
*/
