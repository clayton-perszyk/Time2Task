import React from 'react'
import PropTypes from 'prop-types'
import TextInput from '../../atoms/TextInput/TextInput'
import Button from '../../atoms/Button/Button'

import './AddTask.css'

const AddTask = ({handleClick, handleChange}) => {

  return (
    <div className="add-task">
      <TextInput handleChange={handleChange} />
      <Button handleClick={handleClick} value="Add Task" />
    </div>
  )
};

export default AddTask
