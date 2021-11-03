const Header = (props) => {
  return (
    <header className="header clearfix">
      <h1>TO DO LIST</h1>

      <form onSubmit={props.addTask}>
        <input type="text" value={props.value} onChange={props.changeValue} />
        <input className="btn" type="submit" value="Add" />
      </form>
    </header>
  );
};
export default Header;
