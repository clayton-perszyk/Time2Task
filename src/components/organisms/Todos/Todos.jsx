import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Title from '../../atoms/Title/Title'
import TaskList from '../../molecules/TaskList/TaskList'
import AddTask from '../../molecules/AddTask/AddTask'

import './Todos.css'

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      newTask: '',
      taskIds: 0
    };

    this.addTask = this.addTask.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.updateCompleted = this.updateCompleted.bind(this);
  }

  handleInputChange(e) {
    this.setState({ newTask: e.target.value});
  }

  addTask() {
    this.setState({
      tasks: this.state.tasks.concat([{taskId: this.state.taskIds++, description: this.state.newTask, completed: false}])
    });
  }

  updateCompleted(e) {
    const dataId = e.target.getAttribute('data-id');
    const newState = this.state.tasks.map((task) => {
      if (task.taskId === parseInt(dataId)) {
        const updatedTask = Object.assign({}, task, {completed: !task.completed});
        return updatedTask;
      } else {
        return task;
      }
    });

    this.setState({tasks: newState});
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className="todos">
        <Title title="To-do List" />
        <TaskList tasks={tasks} onChecked={this.updateCompleted} />
        <AddTask handleChange={this.handleInputChange} handleClick={this.addTask} />
      </div>
    )
  }
}

export default Todos
