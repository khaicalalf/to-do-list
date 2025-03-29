import React from "react";
import { useTask } from "../Context/GlobalContext";
import "../index.css";

function Item({ item, key }) {
  const { removeTask, checkedTask, uncheckedTask } = useTask();

  const handleCheck = (id) => {
    const checked = document.getElementById(id).checked;
    if (checked) {
      checkedTask(id);
    } else {
      uncheckedTask(id);
    }
  };
  return (
    <>
      <li key={key} className="list-row">
        <input
          type="checkbox"
          id={item.id}
          onClick={() => handleCheck(item.id)}
        />
        <label
          htmlFor={item.id}
          style={{
            textDecoration: item.checked ? "line-through" : "none",
          }}
        >
          {item.time} | {item.name}
        </label>
        <button className="text-error" onClick={() => removeTask(item.id)}>
          &times;
        </button>
      </li>
    </>
  );
}

export default Item;
