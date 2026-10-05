/*
-Objects are a complex datatype.
 its a datatype that houses other datatypes.

- in realife you cannot
  really express data using a single variable.

-> {
  key:value,
  key:value,
  key:value
 } //blocke

 //nested object
 // house -> safe 
//2 keys <1 house> safe
 key:<property>=><number or a string><unique>
 value=>any other dataype<boolean,string,null,object> be a function
 if value is a function <method>.

*/

/*
//object oriented programming
//functional programming
 Why objects are usefull.
 1.if you want to represent a complex datatype->
*/

/*
 this will take you alot of time.
 you will have multiple variables that represent the same 
 thing
*/

//bad design//code smart//lazy
const student_name = "Samson"; //string
const student_age = 24; //number
const student_phone = "254732342342"; //number
//parent
const parent_name = "Maggy";
const parent_email = "maggy@gmail.com";
/*
 you have one variable that represent the whole
 thing.
*/
const student = {
  name: "John Mwangi",
  age: 34,
  "favourite quote": "Backwards Never Forward Ever",
  parent: {
    name: "Maggnus",
    phone: "2547324324",
  },
  pet: {},
  34: "Favourite number",
  sayMyName: function () {
    console.log(`John Mwangi`);
  },
  anounce: function () {
    alert(`John Mwangi Gracing you with his/her presence`);
  },
};

/*
create an object. called car.
properties: name,model,top_speed
engine_information:<object>how many cylinder,number
manufacture:object<> name,aka, country 
<number as property<key>>:any number
alert_info:function that when called prints information of the car as an alert
fun fact:<key>.
is_it_a_classic<property:value<boolen>>

*/
const car = {
  name: "Peugeot 504",
  model: "504 L saloon",
  color: "Jungle Green",
  top_speed: "160km/h",
  504: "Lion of Africa",
  engine_information: {
    name: " 1.8L inline-4 (XC5) ",
    cylinder: 4,
  },
  manufacture: {
    name: "Peugeot",
    aka: "Pegot",
    country: "France",
  },
  alert_info: function () {
    alert(`Car:${car.name}
         model:${car.model}
         color:${car.color}
         top_speed:${car.top_speed}
        `);
  },
  "fun fact": `
   First car to cross the sahara desert.
   no reverse parking near banks.
   No air bags you die like real men.
  `,
};
