import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodo } from "../redux/action";
import Todo from "./Todo";
import Tab from "./Tab";

const TodosList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const currentTab = useSelector((state) => state.currentTab);
  useEffect(() => {
    dispatch(getTodo());
  }, []);

  return (
    <div>
      <article>
        <div>
          <Tab currentTab={currentTab} />
        </div>
        <ul>
          {todos.map((todo) => (
            <Todo key={todo._id} todo={todo} />
          ))}
        </ul>
      </article>
    </div>
  );
};

export default TodosList;
