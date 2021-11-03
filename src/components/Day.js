const Day = (props) => {
  return (
    <li
      style={props.active ? { boxShadow: "1px 2px gray" } : null}
      onClick={() => props.changeStatus(props.id)}
    >
      {props.day}
    </li>
  );
};
export default Day;
