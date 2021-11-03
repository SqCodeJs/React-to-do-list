const Task = (props) => {
  const lista = props.tasks.map((item, i) => (
    <li key={i} className="clearfix">
      {item}
      <button onClick={props.handleDoneButton}>Done</button>
      <button onClick={() => props.handleTasksRemove(i)}>Remove</button>
    </li>
  ));

  return lista;
};
export default Task;
