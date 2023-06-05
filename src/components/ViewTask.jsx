import { useState } from "react";
import Button from "react-bootstrap/Button";
import uuid4 from "uuid4";
import { PendingTask } from "./PendingTask";

export const ViewTask = () => {
  const [task, setTask] = useState({ id: null, name: "", completed: false });
  const [tasks, setTasks] = useState([]);

  const handleInput = (e) => {
    setTask({ ...task, id: uuid4(), name: e.target.value });
  };

  const handleClick = () => {
    setTasks([...tasks, task]);
    setTask({ id: null, name: "" });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Agrega una nota para más tarde..."
        onInput={handleInput}
      ></input>
      <Button variant="outline-warning" onClick={handleClick}>
        Añadir
      </Button>
      <PendingTask
        tasks={tasks} setTasks={setTasks}
      />
    </>
  );
};
