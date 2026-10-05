/*
create a form to 
name,email,phone,password.

have a submit button that 
console.logs the values when form submited.

after the form have a list to show the state
changes as user is typing for each.

for all the input fields use only
1 state variable. 
example [input,setInput]=useState(<object:hint>)
-> it stores other data types.
20 minutes.
*/

/*
How to handle form input and events
*/
import { useState } from "react";

function Form() {
  // event when name changes

  //useState("")

  /*
   stateData=[]
   0:initial State
   1:update State function
  */

  //return []=>
  //0 current state
  //1 funciton:<update state>

  const [input, setInput] = useState(["", "", "", ""]);

  const nameOnChange = (e) => {
    // console.log("NAME IS", e.target.value);
    const inputClone = [...input]; //structuredClone(input)
    //const inputClone = { ...input }
    inputClone[0] = e.target.value;
    setInput(inputClone);
  };

  //
  const onSubmit = () => {
    console.log("Submit button clicked");
    console.log("name is", input[0]);
    console.log("email is", input[1]);
    console.log("phone is", input[2]);
    console.log("password is", input[3]);
    //request->
  };

  return (
    <div>
      <main>
        <div>
          <label>Name</label>
        </div>
        <div>
          <input value={input[0]} onChange={nameOnChange} />
        </div>
      </main>
      <main>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input
            value={input[1]}
            onChange={(e) => {
              const inputClone = [...input]; //
              //const inputClone = { ...input }
              inputClone[1] = e.target.value;
              setInput(inputClone);
            }}
          />
        </div>
      </main>
      <main>
        <div>
          <label>Phone</label>
        </div>
        <div>
          <input
            value={input[2]}
            onChange={(e) => {
              const inputClone = [...input]; //
              //const inputClone = { ...input }
              inputClone[2] = e.target.value;
              setInput(inputClone);
            }}
          />
        </div>
      </main>
      <main>
        <div>
          <label>Password</label>
        </div>
        <div>
          <input
            type="password"
            value={input[3]}
            onChange={(e) => {
              const inputClone = [...input]; //
              //const inputClone = { ...input }
              inputClone[3] = e.target.value;
              setInput(inputClone);
            }}
          />
        </div>
      </main>

      <main>
        <button onClick={onSubmit}>Submit</button>
      </main>

      {/*displaying data*/}
      <ul>
        <li>Name:{input[0]}</li>
        <li>Email:{input[1]}</li>
        <li>Phone:{input[2]}</li>
        <li>Password:{input[3]}</li>
      </ul>
    </div>
  );
}

export default Form;
