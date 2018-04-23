import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Button from './Button'

const props = {
  value: 'foo',
  handleClick: () => {},
  type: 'submit'
}

const wrapper = shallow(<Button {...props} />);

describe('(Component) Button', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should contain a button element', () => {
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should have props for value, type, and handleClick', () => {
    expect(wrapper.props().value).to.exist;
    expect(wrapper.props().type).to.exist;
    expect(wrapper.props().onClick).to.exist;
  });
});
