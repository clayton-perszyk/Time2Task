import React from 'react'
import PropTypes from 'prop-types'
import Round from '../../atoms/Round/Round'

import './Rounds.css'

const Rounds = ({numberOfRounds, rounds}) => {
  let roundComponents = [];

  for (let i = 1; i <= numberOfRounds; i++) {
    if (i <= rounds) {
      roundComponents.push(<Round key={i} roundNumber={i} activeOrComplete={'activeOrComplete'} />);
    } else {
      roundComponents.push(<Round key={i} roundNumber={i}  activeOrComplete={''} />);
    }
  }

  return (
    <div className="rounds">
      {roundComponents}
    </div>
  )
};

Rounds.propTypes = {
  numberOfRounds: PropTypes.number.isRequired,
  rounds: PropTypes.number
};

export default Rounds
