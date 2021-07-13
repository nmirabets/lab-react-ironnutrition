import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    // console.log('constructor');
  }

  componentDidMount() {
    // console.log('componentDidMount');
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate');
  }

//   handleCheckbox = (index) => {
//     const tasks = [...this.state.tasks];
//     tasks[index].done = !tasks[index].done;
//     this.setState({
//       tasks: tasks,
//     });
//   };

//   handleDeleteTask = (index) => {
//     const tasks = [...this.state.tasks];
//     tasks.splice(index, 1);
//     this.setState({
//       tasks,
//     });
//   };

//   handleAddTask = (taskName) => {
//     const oldTasks = [...this.state.tasks];
//     oldTasks.push(buildTask(taskName));

//     this.setState({
//       tasks: oldTasks,
//     });
//   };

  handleOnChange = (e) => {
    this.props.onChange(e);
  }

  render() {
    return (
        <input 
            type="text"
            className = "border border-blue-500 border-4 m-1 w-96"
            onChange={this.handleOnChange}
            placeholder="Search for food..."
        />
    );
  }
}

export default SearchBar;