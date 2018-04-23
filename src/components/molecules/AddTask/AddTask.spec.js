import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import AddTask from './AddTask'
import TextInput from '../../atoms/TextInput/TextInput'
import Button from '../../atoms/Button/Button'


const props = {
}

const wrapper = mount(<AddTask {...props} />);

describe('(Component) AddTask', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should have a div container element with class .rounds', () => {
    expect(wrapper.find('.add-task')).to.have.length(1);
  });

  it('should have one (1) TextInput', () => {
    expect(wrapper.find(TextInput)).to.have.length(1);
  });

  it('should have one (1) Button', () => {
    expect(wrapper.find(Button)).to.have.length(1);
  });
});
