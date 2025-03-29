import React from "react";
import { useTask } from "../Context/GlobalContext";
import Item from "./item";
import "../index.css";

function GroceryList() {
  const { tasks, clearTasks } = useTask();

  return (
    <>
      <div>
        <ul className="list">
          {tasks.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </ul>
      </div>
      <div className="actions">
        <button
          onClick={clearTasks}
          className="btn btn-outline border-gray-200 bg-black text-white"
        >
          Clear The List
        </button>
      </div>
    </>
  );
}

export default GroceryList;
