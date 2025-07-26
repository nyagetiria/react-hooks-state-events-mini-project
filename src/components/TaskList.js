import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onTaskDelete }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDelete={() => onTaskDelete(task.text)}
        />
      ))}
    </div>
  );
};

export default TaskList;