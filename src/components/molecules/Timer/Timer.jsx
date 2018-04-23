import React from 'react'
import PropTypes from 'prop-types'
import Time from '../../atoms/Time/Time'

import './Timer.css'

const Timer = ({minutes, seconds}) => {

  return (
    <div className="timer">
      <Time timeValue={minutes} /><span className="seperator">:</span><Time timeValue={seconds} />
    </div>
  )
};

Timer.propTypes = {
  minutes: PropTypes.string.isRequired,
  seconds: PropTypes.string.isRequired
};

export default Timer
