import React from 'react'
import PropTypes from 'prop-types'
import TaskItemContainer from '../../atoms/TaskItemContainer/TaskItemContainer'
import Checkbox from '../../atoms/Checkbox/Checkbox'

import './Task.css'

const Task = ({onChecked, taskId, ...other}) => {
  return (
    <div className="task">
      <Checkbox onChecked={onChecked} dataId={taskId} />
      <TaskItemContainer {...other} />
    </div>
  )
};

Task.propTypes = {
  taskItem: PropTypes.object.isRequired,
  taskId: PropTypes.number.isRequired
};

export default Task
