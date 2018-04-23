import React from 'react'
import PropTypes from 'prop-types'

import './TextInput.css'

const TextInput = ({handleChange, id, name, value}) => {
  return (
    <input onChange={handleChange} className="text-input" type="text" id={id} name={name} value={value} />
  )
};

TextInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string
};

export default TextInput
