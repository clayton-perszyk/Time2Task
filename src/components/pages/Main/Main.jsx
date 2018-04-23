import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Pomodoro from '../../organisms/Pomodoro/Pomodoro'
import Todos from '../../organisms/Todos/Todos'

import './Main.css'

const Main = () => {
  return (
    <div className="main">
      <Pomodoro initialMinutes={"25"} initialSeconds={"00"} />
      <Todos />
    </div>
  );
};

export default Main
