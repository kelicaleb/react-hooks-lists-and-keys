import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];
  const color = colors.map(color => {
   return  <li style={{color:color}}>{color}</li>
  });
  return (
    <><h3>Css style color</h3><ul>
      {color}
    </ul></>
  )
}

export default ColorList;
