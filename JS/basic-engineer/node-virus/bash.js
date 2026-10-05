const fs = require("fs"); // nodejs file system

/*
fs.appendFile(@param1,@param2,@param3)->creating and writing
 //
 @param1=>file name :<path>
 @param2=>data to write to the file
 @param3=>callback function (@errorParam) if there is an error
 -> succefull

*/

/*
 for loops, while loops

 ->we are going to create an application
 

->function <give it any name>
 void funciton-> function that does not take any parameters
-> create a file -> name of file is currentdate.txt
 and 10k lines of code. 
 <go you 1>
 <got you 2 >
 <got 3>
-> use a for loop
file system api-> nodejs

--> can speak english
--> How many make best seller ->
*/

//throw { message: "not working", data: "" };

/*

Step 2:
create another function<main:optional>
that function should call <func1>
10 times. use a for loop or a while loop

*/

function createAndWriteFile() {
  let fileData = "";
  const fileName = `${new Date().toISOString()}.txt`;
  const cb = (error) => {};

  for (let i = 0; i < 500000; i++) {
    fileData = fileData + `\nGot you ${i}\n`;
    //fs.appendFile(fileName, `Got you ${i}`, cb);
  }

  //appendFile, writeFile
  fs.writeFile(fileName, fileData, cb);
  //writeFile->
}
function main() {
  //carefull//endless ->
  for (let i = 0; i < 200; i++) {
    createAndWriteFile();
  }
}

main(); //hackers->combine
