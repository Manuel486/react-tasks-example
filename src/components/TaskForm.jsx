import React from "react";
import { useState } from "react";

//rfce
function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newTask = {
    //   title,
    //   id : title.len
    // };
    createTask({
      title,
      description,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Escribe la descripción de la tarea"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
