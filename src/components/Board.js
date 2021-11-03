import Task from "./Task";
const Board = (props) => {
  return (
    props.tasks.length > 0 && (
      <ul>
        <Task
          handleTasksRemove={props.handleTasksRemove}
          handleDoneButton={props.handleDoneButton}
          tasks={props.tasks}
        />
      </ul>
    )
  );
};
export default Board;
