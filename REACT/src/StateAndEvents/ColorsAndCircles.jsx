import { useState } from "react";

/*
how to pass state to other components.
update the state if they.
props and state.

1. Move the color and set color state inside the ColorForm.<increase performance>
  to see the before and after.
   console.log("<component name>", new Date()); //for each component
2. Add a button on single color to remove the color. <remove color>
   hint:[perform a state update]
*/

function ColorsCircles() {
  // dont create a new object, dont change object keys//
  const [colors, setColors] = useState(["yellow", "blue", "red"]);

  const [radius, setRadius] = useState("");

  //console.log("colors Cirlce render ", new Date());

  return (
    <div>
      <ColorForm setColors={setColors} colors={colors} />
      <ColorList colors={colors} setColors={setColors} />
    </div>
  );
}

function ColorForm(props) {
  const { setColors, colors } = props;
  const [color, setColor] = useState("");
  console.log("ColorForm render ", new Date());
  const onSubmit = () => {
    const clonedColors = structuredClone(colors); //[...colors]
    clonedColors.push(color);
    setColors(clonedColors);
  };

  return (
    <div>
      <label>Enter Color</label>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <button onClick={onSubmit}>Save</button>
    </div>
  );
}

function ColorList(props) {
  const { colors, setColors } = props;
  console.log("ColorList render ", new Date());

  const removeColor = (index) => {
    console.log("remove color ", colors[index], " index is ", index);
    const newArray = [];

    for (let i = 0; i < colors.length; i++) {
      if (i === index) {
        continue;
      }
      newArray.push(colors[i]);
    }
    setColors(newArray); //["blue","green"]
    // const filteredArray = colors.filter((color, i) => {
    //   if (i === index) {
    //     return false;
    //   }
    //   return true;
    // });
    // setColors(filteredArray);

    //--->1000 /s --> 10m /s
    // denial of service attack
    //->rate limiting -> 1p 100 req/sec , 10 sec

    //comparasion true
    //const filteredArray = colors.filter((color,i)=>i !==index)
  };

  return (
    <div style={{ marginTop: "30px" }}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            marging: "10px",
            width: "100%",
            height: "30px",
            backgroundColor: color,
            color: "white",
            padding: "10px",
          }}
        >
          <span> {color}</span>
          <button onClick={() => removeColor(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default ColorsCircles;
