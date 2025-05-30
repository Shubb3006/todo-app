import { useEffect, useState } from "react";
import All_Todos from "./All_Todos";
import TodoInput from "./TodoInput";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("allTasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);

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
    setTask("");
    setLoading(true);
    setTimeout(() => {
      setTasks((prevTasks) => [...prevTasks, newTask]);

      if (isEdit) setIsEdit(false);
      setLoading(false);
    }, 2000);
  }

  return (
    <div className="todo-container">
      <TodoInput onSub={handleSubmit} task={task} setTask={setTask} />
      <All_Todos
        tasks={tasks}
        onDelete={handleDelete}
        onEdit={handleEdit}
        isEdit={isEdit}
        loading={loading}
      />
    </div>
  );
};

export default Todo;
