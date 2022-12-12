import React, { useState } from "react";

export default function AnotherDiv() {
  const [anotherDiv, setAnotherDiv] = useState(null);

  const handleClick = () => {};
  return (
    <div>
      <div className="Box">
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  );
}
