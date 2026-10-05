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

  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const nameOnChange = (e) => {
    // console.log("NAME IS", e.target.value);
    const inputClone = { ...input }; //sturcturedClone(input)
    //->objects passed by referenced
    //passed->

    // pass by reference
    //pass by value
    //const inputClone = { ...input }
    inputClone.name = e.target.value;
    setInput(inputClone);
  };

  //
  const onSubmit = () => {
    console.log("Submit button clicked");
    console.log("name is", input.name);
    console.log("email is", input.email);
    console.log("password is", input.password);
    //request->
  };

  console.log(input);

  return (
    <div>
      <main>
        <div>
          <label>Name</label>
        </div>
        <div>
          <input value={input.name} onChange={nameOnChange} />
        </div>
      </main>
      <main>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input
            value={input.email}
            onChange={(e) => {
              const inputClone = { ...input };
              inputClone.email = e.target.value;
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
            value={input.phone}
            onChange={(e) => {
              const inputClone = { ...input };
              inputClone.phone = e.target.value;
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
            value={input.password}
            onChange={(e) => {
              const inputClone = { ...input };
              inputClone.password = e.target.value;
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
        <li>Name:{input.name}</li>
        <li>Email:{input.email}</li>
        <li>Phone:{input.phone}</li>
        <li>Password:{input.password}</li>
      </ul>
    </div>
  );
}

export default Form;
