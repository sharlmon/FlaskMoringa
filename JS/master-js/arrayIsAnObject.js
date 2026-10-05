/*
 look at the differences 
 between an array and an object.
 ->in an array keys are sequential<numbers><>
*/
/*
create an object that behaves like an array.
1.create an array give it <any name>
  inside the array have two digits.
  0:<any digit>
  1:<any digit>
2.create an object. <any name>
  inside the object have keys.
  0:<any digit>
  1:<any digit>
  for the object create the length key.
  have it as size of the object<keys>
3.console.table both. you shoudl see there are
the same.
*/

/* 
  push method:<we can see>
  arr.push(11).
  1.first a new key is created
  2.element is added to that key<>
  2.the length of the array is incremented
*/

/*
 Try to recreate the pop method.
 Data Structures<Object,Array,Single Linked List,Double Link List,Tree,Graph>
 ->Class<using>
 ->Class<blueprint to create objects>
 -->this<> you own data structuers
*/

const ar = [20, 5]; //push,pop,<non sequential keys:Don't store them>
const arObj = {
  0: 20,
  1: 5,
  push: function (newItem) {
    //this <Access object inside object>instead of using the object name
    const key = this.length; //current key
    this[key] = newItem; //element added to that key
    this.length = this.length + 1; //incriment the length
  },
  length: 2,
};
console.table(ar);
console.table(arObj);
const node1 = {
  location: "CBD",
};
const node2 = {
  location: "Machakos",
};
const node3 = {
  location: "Mombasa",
};

node1.nodeA = node2;
node1.nodeB = node3;

node2.nodeA = node1;
node2.nodeB = node3;

node3.nodeA = node1;
node3.nodeB = node2;
