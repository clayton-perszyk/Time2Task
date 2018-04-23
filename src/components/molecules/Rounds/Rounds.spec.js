import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Rounds from './Rounds'
import Round from '../../atoms/Round/Round'

const props = {
  numberOfRounds: 4
}

const wrapper = mount(<Rounds {...props} />);

describe('(Component) Rounds', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should have a div container element with class .rounds', () => {
    expect(wrapper.find('.rounds')).to.have.length(1);
  });

  it('should have numberOfRounds as a prop', () => {
    expect(wrapper.props().numberOfRounds).to.exist;
  });

  it('should have four (4) Round components, if passed numberOfRounds is four (4)', () => {
    expect(wrapper.find(Round)).to.have.length(4);
  });
});
