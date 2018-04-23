import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Pomodoro from '../../organisms/Pomodoro/Pomodoro'
import Todos from '../../organisms/Todos/Todos'
import Main from './Main'

const wrapper = shallow(<Main />);

describe('(Component) Pomodoro', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should have a div container element with class .main', () => {
    expect(wrapper.find('.main')).to.have.length(1);
  });

  it('should have a Todos', () => {
    expect(wrapper.find(Todos)).to.have.length(1);
  });

  it('should have a Pomodoro', () => {
    expect(wrapper.find(Pomodoro)).to.have.length(1);
  });
});
