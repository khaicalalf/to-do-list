import React from "react";
import { useState } from "react";
import { useTask } from "../Context/GlobalContext";
import "../index.css";

function Form() {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const { addTask } = useTask();

  const handleSubmit = (e) => {
    e.preventDefault();
    //alert(time);
    if (!name || !time) return;
    addTask(name, time);
    console.log(name, time);
    setName("");
    setTime("");
  };

  return (
    <form className="align-center" onSubmit={handleSubmit}>
      <div>
        <fieldset className="fieldset w-full bg-base-200 border border-base-300 p-4 rounded-box flex items-center gap-2">
          <input
            type="time"
            className="input w-1/4"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <input
            type="text"
            className="input w-full"
            placeholder="What do you want to do today?"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="w-1/4 btn btn-outline border-gray-200 bg-black text-white">
            Add
          </button>
        </fieldset>
      </div>
    </form>
  );
}

export default Form;
