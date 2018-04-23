import React from 'react'
import PropTypes from 'prop-types'

const Time = ({timeValue}) => {
  return (
    <span className="time">{timeValue}</span>
  )
};

Time.propTypes = {
  timeValue: PropTypes.string
};

export default Time
