const Todo_Input = ({ task, setTask, onSub }) => {
  return (
    <div className="todo-input">
      <form onSubmit={onSub}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Todo_Input;
