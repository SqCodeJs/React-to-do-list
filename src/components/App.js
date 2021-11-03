import React from "react";
import "../App.css";
import Header from "./Header";
import DayList from "./DayList";

class App extends React.Component {
  state = {
    days: [
      { id: 1, day: "Monday", active: false, tasks: [] },
      { id: 2, day: "Tuesday", active: false, tasks: [] },
      { id: 3, day: "Wednesday", active: false, tasks: [] },
      { id: 4, day: "Thursday", active: false, tasks: [] },
      { id: 5, day: "Friday", active: false, tasks: [] },
      { id: 6, day: "Saturday", active: false, tasks: [] },
      { id: 7, day: "Sunday", active: false, tasks: [] },
    ],
    value: "",

    //
  };
  handleChangeStatus = (id) => {
    this.state.days.forEach((item) => (item.active = false));
    const items = this.state.days.map((item) => {
      if (id === item.id) {
        item.active = !item.active;
      }
      return item;
    });
    this.setState({
      days: items,
      value: "",
    });
  };
  addTask = (event) => {
    event.preventDefault();

    const value = this.state.value;
    const active = this.state.days.find((i) => i.active);
    //  console.log("active",active)
    if (!active) alert("Wybierz dzien");
    else if (!value) alert("wpisz zadanie");
    else this.state.days.filter((i) => i.active && i.tasks.push(value));

    const days = this.state.days.map((day) => day);

    this.setState({
      days,
      value: "",
    });
  };
  changeValue = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleTasksRemove = (id) => {
    const days = [...this.state.days];

    const active = this.state.days.find((i) => i.active);

    active.tasks.splice(id, 1);
    this.setState({
      days: days,
    });
  };
  handleDoneButton = (event) => {
    event.target.parentNode.classList.toggle("done");
    event.target.classList.toggle("bColor");
  };
  render() {
    return (
      <React.Fragment>
        <div className="wrapp">
          <Header
            value={this.state.value}
            addTask={this.addTask}
            changeValue={this.changeValue}
          />
          <DayList
            days={this.state.days}
            handleTasksRemove={this.handleTasksRemove}
            changeStatus={this.handleChangeStatus}
            handleDoneButton={this.handleDoneButton}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
