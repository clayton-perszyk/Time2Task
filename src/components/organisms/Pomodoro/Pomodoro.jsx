import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Message from '../../atoms/Message/Message'
import Title from '../../atoms/Title/Title'
import Button from '../../atoms/Button/Button'
import Rounds from '../../molecules/Rounds/Rounds'
import Timer from '../../molecules/Timer/Timer'
import alertSound from '../../../../sounds/alert.mp3'


import './Pomodoro.css'

class Pomodoro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: props.initialMinutes,
      seconds: props.initialSeconds,
      startTimeReady: true,
      message: 'Start timer for round 1',
      currentRound: 0,
      break: false,
      startButtonDisabled: false
    };

    this.alert = new Audio(alertSound);
    this.startTimer = this.startTimer.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  componentDidUpdate() {
    let breakDuration = 300;
    if (this.state.break === true) {
      this.setState({startTimeReady: true, break: false, message: 'Break Time!'});
      breakDuration = this.state.currentRound > 3 ? 1800 : breakDuration;
      this.countDown(breakDuration);
    }
  }

  countDown(totalSeconds) {
    let countDownTimer = totalSeconds, minutes, seconds;
    const self = this;
    const propsRef = this.props;
    this.intervalId = setInterval(() => {
        minutes = parseInt(countDownTimer / 60, 10)
        seconds = parseInt(countDownTimer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        self.setState({
          minutes: minutes.toString(),
          seconds: seconds.toString()
        });

        if (--countDownTimer < 0) {
            countDownTimer = 0;
            clearInterval(self.intervalId);
            this.alert.play();

            if (self.state.startTimeReady === false && self.state.break === false) {
              self.setState({ break: true });
            } else {

              let round = self.state.currentRound;
              if (round > 3) { round = 0; }

              self.setState({
                currentRound: round,
                startButtonDisabled: false,
                minutes: propsRef.initialMinutes,
                seconds: propsRef.initialSeconds,
                message: `Start timer for round ${round + 1}`
              });
            }
        }
      }, 1000);
  }

  startTimer() {
    if (this.state.startTimeReady === true) {
      this.setState({startButtonDisabled: true,
                     startTimeReady: false,
                     currentRound: ++this.state.currentRound,
                     message: 'Keep working...'});
      this.countDown((parseInt(this.state.minutes) * 60) + parseInt(this.state.seconds));
    }
  }

  render() {
    const { currentRound, message, minutes, seconds, startButtonDisabled } = this.state;

    return (
      <div className="pomodoro">
        <Title title="Pomodoro" />
        <Rounds numberOfRounds={4} rounds={currentRound} />
        <Message message={message} />
        <Timer minutes={minutes} seconds={seconds} />
        <Button disabled={startButtonDisabled} handleClick={this.startTimer} value={"Start"} />
      </div>
    )
  }
}

Pomodoro.propTypes = {
  initialMinutes: PropTypes.string.isRequired,
  initialSeconds: PropTypes.string.isRequired
}

export default Pomodoro
