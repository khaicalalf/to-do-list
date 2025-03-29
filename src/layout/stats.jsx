import React from "react";
import { useTask } from "../Context/GlobalContext";
import "../index.css";

function Stats() {
  const { getTaskStats } = useTask();
  const { completed, pending } = getTaskStats();
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-200 text-base-content p-4 flex gap-4 justify-center">
      <p>
        <strong>Completed:</strong> {completed}
      </p>
      <p>
        <strong>Pending:</strong> {pending}
      </p>
    </footer>
  );
}

export default Stats;
