import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Checkbox from './Checkbox'

const props = {
  name: "cb",
  value: "my-value",
  id: "my-id",
  taskId: 1
}

const wrapper = shallow(<Checkbox {...props}/>);

describe('(Component) Checkbox', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should contain a checkbox input element', () => {
    expect(wrapper.find({type: 'checkbox'})).to.have.length(1);
  });

  it('should accept props for id, name, and value', () => {
    expect(wrapper.props().name).to.exist;
    expect(wrapper.props().id).to.exist;
    expect(wrapper.props().value).to.exist;
  });
});
