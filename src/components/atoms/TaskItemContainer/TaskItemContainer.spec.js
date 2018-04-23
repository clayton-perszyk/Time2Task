import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import TaskItemContainer from './TaskItemContainer'

const props = {
  taskItem: {
    description: "coding"
  }
}

const wrapper = shallow(<TaskItemContainer {...props} />);

describe('(Component) TaskItemContainer', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should contain a div element', () => {
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('should render a taskItem prop as child', () => {
    expect(wrapper.props().children).to.equal('coding');
  });
});
