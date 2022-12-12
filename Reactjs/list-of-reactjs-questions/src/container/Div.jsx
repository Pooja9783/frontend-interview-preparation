import React, { useState } from "react";
import "./div.css";
const Div = () => {
  const [anotherDiv, setAnotherDiv] = useState(null);

  const handleClick = () => {
    setAnotherDiv({});
  };

  return (
    <div>
      <div className="Box">
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  );
};

export default Div;
