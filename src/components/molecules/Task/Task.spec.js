import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Task from './Task'
import TaskItemContainer from '../../atoms/TaskItemContainer/TaskItemContainer'
import Checkbox from '../../atoms/Checkbox/Checkbox'

const props = {
  taskId: 1,
  taskItem: {
    description: "write code"
  }
}

const wrapper = mount(<Task {...props} />);

describe('(Component) Task', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should have a div container element with class .task', () => {
    expect(wrapper.find('.task')).to.have.length(1);
  });

  it('should have taskItem as a prop', () => {
    expect(wrapper.props().taskItem).to.exist;
  });

  it('should have one (1) TaskItemContainer', () => {
    expect(wrapper.find(TaskItemContainer)).to.have.length(1);
  });

  it('should have one (1) Checkbox input', () => {
    expect(wrapper.find(Checkbox)).to.have.length(1);
  });
});
