import React from 'react'
import PropTypes from 'prop-types'
import Task from '../../molecules/Task/Task'

import './TaskList.css'

const TaskList = ({tasks, onChecked}) => {
  let allTasks = tasks.map((task, index) => {
    return <Task taskItem={task} key={index} onChecked={onChecked}  taskId={task.taskId}/>
  });

  return (
    <div className="task-list">
      {allTasks}
    </div>
  )
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onChecked: PropTypes.func.isRequired
};

export default TaskList
