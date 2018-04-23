import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Timer from './Timer'
import Time from '../../atoms/Time/Time'

const props = {
  minutes: '25',
  seconds: '00'
}

const wrapper = mount(<Timer {...props} />);

describe('(Component) Timer', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should have a div container element with class .timer', () => {
    expect(wrapper.find('.timer')).to.have.length(1);
  });

  it('should have minutes and seconds props', () => {
    expect(wrapper.props().minutes).to.exist;
    expect(wrapper.props().seconds).to.exist;
  });

  it('should have two (2) time components', () => {
    expect(wrapper.find(Time)).to.have.length(2);
  });
});
