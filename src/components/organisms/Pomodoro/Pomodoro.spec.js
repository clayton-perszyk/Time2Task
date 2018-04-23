import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'
import Pomodoro from '../../organisms/Pomodoro/Pomodoro'
import Title from '../../atoms/Title/Title'

const props = {
  initialMinutes: "25",
  initialSeconds: "00",
}

const wrapper = mount(<Pomodoro {...props} />);

describe('(Component) Pomodoro', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should have a div container element with class .pomodoro', () => {
    expect(wrapper.find('.pomodoro')).to.have.length(1);
  });

  it('should have a Title', () => {
    expect(wrapper.find(Title).props().title).to.equal('Pomodoro');
  });

  it('should have Rounds', () => {
    expect(wrapper.find('.rounds')).to.have.length(1);
  });

  it('should have four (4) rounds', ()=> {
    expect(wrapper.find('.round')).to.have.length(4);
  });

  it('should have a Timer', () => {
    expect(wrapper.find('.timer')).to.have.length(1);
  });

  it('should have a Message', () => {
    expect(wrapper.find('.message')).to.have.length(1);
  });

  it('should have time for minutes and seconds', () => {
    expect(wrapper.find('.time')).to.have.length(2);
  });

  it('should have props for value, type, and handleClick', () => {
    expect(wrapper.props().initialMinutes).to.exist;
    expect(wrapper.props().initialSeconds).to.exist;
  });

  it('should have a start button with value Start', () => {
    const button = wrapper.find('.button');
    expect(button).to.have.length(1);
    expect(button.props().value).to.equal('Start');
  });

  it('should start timer, when button is pressed', () => {
    const startButton = wrapper.find('.button');
    const clock = sinon.useFakeTimers();
    wrapper.setState({startTimeReady: true});
    startButton.simulate('click');
    expect(wrapper.state().startTimeReady).to.equal(false);
  });

  it('should increment rounds on start', () => {
    const startButton = wrapper.find('.button');
    wrapper.setState({rounds: 0, startTimeReady: true});
    startButton.simulate('click');
    expect(wrapper.state().currentRound).to.equal(1);
  });
});
