const All_Todos = ({ tasks, onDelete, onEdit, isEdit, loading }) => {
  return (
    <div className="todo-list">
      {loading && <p className="loading">Adding Task.......</p>}
      <h2>{tasks.length > 0 ? "All Todos" : "Add a Task"}</h2>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.task}
          <div className="actions">
            <button onClick={() => onDelete(task.id)} disabled={isEdit}>
              Delete
            </button>
            <button onClick={() => onEdit(task.id)} disabled={isEdit}>
              Edit
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default All_Todos;
