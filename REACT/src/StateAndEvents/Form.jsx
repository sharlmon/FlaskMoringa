/*
How to handle form input and events
*/
import { useState } from "react";

function Form() {
  // event when name changes

  //useState("")
  const stateData = useState("");

  /*
   stateData=[]
   0:initial State
   1:update State function
  */
  console.log(stateData);
  //return []=>
  //0 current state
  //1 funciton:<update state>

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameOnChange = (e) => {
    // console.log("NAME IS", e.target.value);
    setName(e.target.value);
  };

  //
  const onSubmit = () => {
    setName("Cats and Dogs");
    console.log("Submit button clicked");
    console.log("name is", name);
    console.log("email is", email);
    console.log("password is", password);
    //request->
  };

  return (
    <div>
      <main>
        <div>
          <label>Name</label>
        </div>
        <div>
          <input value={name} onChange={nameOnChange} />
        </div>
      </main>
      <main>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </main>
      <main>
        <div>
          <label>Phone</label>
        </div>
        <div>
          <input
            value={stateData[0]}
            onChange={(e) => stateData[1](e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </main>

      <main>
        <button onClick={onSubmit}>Submit</button>
      </main>

      {/*displaying data*/}
      <ul>
        <li>Name:{name}</li>
        <li>Email:{email}</li>
        <li>Phone:{stateData[0]}</li>
        <li>Password:{password}</li>
      </ul>
    </div>
  );
}

export default Form;
