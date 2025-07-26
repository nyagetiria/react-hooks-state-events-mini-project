import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";

const CATEGORIES = ["All", "Code", "Food", "Money", "Misc"];
const TASKS = [
  { text: "Buy rice", category: "Food" },
  { text: "Save a tenner", category: "Money" },
  { text: "Build a todo app", category: "Code" },
  { text: "Build todo API", category: "Code" },
  { text: "Get an ISA", category: "Money" },
  { text: "Cook rice", category: "Food" },
  { text: "Tidy house", category: "Misc" }
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (task) => {
    setTasks([...tasks, task]);
  };

  const handleTaskDelete = (taskText) => {
    setTasks(tasks.filter((task) => task.text !== taskText));
  };

  // Filter tasks based on the selected category
  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <TaskList tasks={filteredTasks} onTaskDelete={handleTaskDelete} />
      <NewTaskForm onTaskFormSubmit={handleTaskFormSubmit} />
    </div>
  );
};

export default App;