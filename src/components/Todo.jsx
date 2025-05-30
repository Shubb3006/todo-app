import { useEffect, useState } from "react";
import Todo_Input from "./Todo_Input";
import All_Todos from "./All_Todos";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("allTasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [isEdit, setIsEdit] = useState(false);

  function handleDelete(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id != id));
  }

  useEffect(() => {
    localStorage.setItem("allTasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleEdit(id) {
    setIsEdit(true);
    const edit_task = tasks.find((task) => task.id == id);
    setTask(edit_task.task);
    handleDelete(edit_task.id);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!task) return;
    const newTask = { id: Date.now(), task };
    if (!newTask) return;
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTask("");

    if (isEdit) setIsEdit(false);
  }

  return (
    <div className="todo-container">
      <Todo_Input task={task} setTask={setTask} onSub={handleSubmit} />
      <All_Todos
        tasks={tasks}
        onDelete={handleDelete}
        onEdit={handleEdit}
        isEdit={isEdit}
      />
    </div>
  );
};

export default Todo;
