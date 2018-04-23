import React from 'react'
import PropTypes from 'prop-types'

import './TaskItemContainer.css'

const TaskItemContainer = ({taskItem}) => {
  return (
    <div className={`task-item-container ${(taskItem.completed ? 'completed' : '')}`} >{taskItem.description}</div>
  )
};

TaskItemContainer.propTypes = {
  taskItem: PropTypes.object.isRequired
};

export default TaskItemContainer
