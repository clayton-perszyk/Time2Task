import React from 'react'
import PropTypes from 'prop-types'

import './Button.css'

const Button = ({disabled, type, value, handleClick}) => {
  return (
    <button disabled={disabled} className="button" type={type} value={value} onClick={handleClick}>{value}</button>
  )
};

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button
