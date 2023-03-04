//import { tasks as data } from "./tasks";
//import { useState, useEffect } from "react";

import TaskCard from "./TaskCard";

// rfce
function TaskList({ tasks, deleteTask }) {
  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   setTasks(data);
  // }, []);

  if (tasks.length === 0) {
    return <h1>No hay tareas aún</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
