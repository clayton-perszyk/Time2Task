import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Round from './Round'

const props = {
  roundNumber: 1
}

const wrapper = shallow(<Round {...props} />);

describe('(Component) Round', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should contain a div element', () => {
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('should render number prop as child', () => {
    expect(wrapper.props().children).to.equal(1);
  });
});
