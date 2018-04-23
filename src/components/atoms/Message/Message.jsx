import React from 'react'
import PropTypes from 'prop-types'

import './Message.css'

const Message = ({message}) => {
  return (
    <div className="message">
      <p>{message}</p>
    </div>
  )
};

Message.propTypes = {
  message: PropTypes.string.isRequired
};

export default Message
