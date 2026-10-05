/*
->Our own callback function
->doing shape stuff
----->shapes.
circle -> 
rectangle->
triangle->

1. for each of the shapes 
  create a funciton<arrow, name>
  to calculate the area. ensure
  the function takes required parameters.
  test the function
2. we are create a super function called shape.
  its going to take the following params
  @param1=>function <correct shape> required
  @param2=>shape name<string>
  @param3=>s1 <required>
  @param4=>s2<optional>
  @param5=>s3<optional>
  1.inside your function shape.
  console each of the parameters and theier types.
  2.for each of your function ie for areaCircle,
  areRectangle, and areaTriangle
  call the shape function and pass the required params.
  example for areaCircle
  -shape(areaCircle,"Circle",10) -> for areCircle. test make observation
  -shape(areaRectangle,"Rectangle",10,5) -> for areCircle. test make observation
  3.inside your shape function.create a result variable
   equate it to the funciton call of @param1 and pass @param3,@param4,@param5
   example
   result=@param1(param3,param4,param5)
 4.Console.log the shap name and the result
   console.log(`for shape ${@param2} area is ${result}`)
   for each shape call it like step 2 and see the result.
   -shape(areaCircle,"Circle",10) -> for areCircle. test make observation
  -shape(areaRectangle,"Rectangle",10,5) -> for areCircle. test make observation
*/

const areaCircle = (radius) => 3.142 * radius * radius;
const areaRectangle = (length, width) => length * width;
const areaTriangle = (base, height) => 0.5 * base * height;

//callback ->extended
function shape(shapeFunction, shapeName, side1, side2, side3) {
  if (typeof shapeFunction !== "function") {
    console.error("Ensure you pass a shape function");
    return;
  }
  console.log(`ShapeFunction ${shapeFunction} its a ${typeof shapeFunction}`);
  console.log(`shapeName ${shapeName} its a ${typeof shapeName}`);
  console.log(`side1 ${side1} its a ${typeof side1}`);
  console.log(`side2 ${side2} its a ${typeof side2}`);
  console.log(`side3 ${side3} its a ${typeof side3}`);
  const result = shapeFunction(side1, side2, side3);
  console.log(`For shape ${shapeName} Area is ${result}`);
  return result;
}

/* for area circler*/
shape(areaCircle, "Circle", 20);

//Make observations
//shape((a, b, h) => 0.5 * (a + b) * h, "Trapezium", 10, 20, 30); //extend
//->
//-> promises , callback hell<one situation>then,catch
//-> block your
//a ,b ->safaricom daja =>(never takes long time) , c ,d
// supect 1, supcet 2, supcet 3 =>
// events ->
