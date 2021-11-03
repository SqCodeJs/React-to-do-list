import Day from "./Day";
import Board from "./Board";

const DayList = (props) => {
  // console.log(props)
  const days = props.days.map((item) => (
    <Day
      key={item.id}
      id={item.id}
      day={item.day}
      active={item.active}
      task={item.tasks}
      changeStatus={props.changeStatus}
    />
  ));

  const board = props.days
    .filter((i) => i.active)
    .map((i) => (
      <Board
        handleDoneButton={props.handleDoneButton}
        handleTasksRemove={props.handleTasksRemove}
        id={i.id}
        key={i.id}
        tasks={i.tasks}
        active={i.active}
      />
    ));

  return (
    <div>
      <ul className="daysList">{days}</ul>
      <div className="board">{board}</div>
    </div>
  );
};
export default DayList;
