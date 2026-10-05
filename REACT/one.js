const numbers = [20, 39, 24, 1, 3, 4, 5, 6];
console.log("numbers", numbers);
/*
 numbers.filter(@param1)
 @param1=(item,index)=> truthy:[all items]
 @param1=(item,index)=> falsey:[no items]
*/
const newArray1 = numbers.filter(() => true);
const newArray2 = numbers.filter(() => false);
const newArray3 = numbers.filter((n, i) => {
  if (n === 24) {
    return false;
  }
  return true;
});
//new array with even numbers only
const newArray4 = numbers.filter((n, i) => {
  if (n % 2 == 0) {
    return true;
  }
  return false;
});
// newArray2=[]
//newArray=numbers
console.log("newArray1", newArray1);
console.log("newArray2", newArray2);
