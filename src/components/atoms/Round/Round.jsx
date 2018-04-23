import React from 'react'
import PropTypes from 'prop-types'

import './Round.css'

const Round = ({activeOrComplete, roundNumber}) => {
  return (
    <div className={`round ${activeOrComplete}`}>{roundNumber}</div>
  )
};

Round.propTypes = {
  roundNumber: PropTypes.number.isRequired,
  activeOrComplete: PropTypes.string
};

export default Round
