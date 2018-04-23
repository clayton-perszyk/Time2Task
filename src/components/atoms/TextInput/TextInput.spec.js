import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import TextInput from './TextInput'

const props = {
  name: "text input",
  value: "enter info here",
  id: "my-text-input"
}

const wrapper = shallow(<TextInput {...props}/>);

describe('(Component) TextInput', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should contain a text type input element', () => {
    expect(wrapper.find({type: 'text'})).to.have.length(1);
  });

  it('should have props for value, type, and handleClick', () => {
    expect(wrapper.props().name).to.exist;
    expect(wrapper.props().value).to.exist;
    expect(wrapper.props().id).to.exist;
  });
});
