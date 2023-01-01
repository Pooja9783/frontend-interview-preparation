import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useReducer,
  useContext,
} from "react";

export default function Hooks() {
  const [stateVal, useStateVal] = useState("useState....");
  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  }, []);
  return (
    <div>
      <h1>Hooks</h1>
      <p>
        Hooks allow function component to have access to state and other react
        features.
      </p>
      <hr />
      <h2>useState</h2>
      <p>
        The useState hook allows us to create state variable in React function
        component.
        <br />{" "}
        <b>
          State allows us to access and update certain value in our components
          overtime.
        </b>
        <br />
        <i>{stateVal}</i>
      </p>

      <hr />
      <h2>useEffect</h2>
      <p>useEffect perform side effect.</p>
      <br />
      <b>
        useEffect let us perfom side effects in a function component. side
        effects are when we need to reach into the outside world. such as
        fetching data from an api working with the dom.
      </b>
      <hr />

      <h2>useRef</h2>
      <p>useRef to reference React Element.</p>
      <br />
      <b>
        Refs are special attribute that are avaible an all React components.
        They are availbe an
      </b>
    </div>
  );
}
