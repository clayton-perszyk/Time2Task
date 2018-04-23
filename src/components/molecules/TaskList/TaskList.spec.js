import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import TaskList from './TaskList'

const props = {
  tasks: [
    {taskId: 0, description: "Work on project", completed: false},
    {taskId: 1, description: "Study Algorithms", completed: false},
    {taskId: 2, description: "Practice the guitar", completed: false}
  ],

  onChecked: function() {},
}

const wrapper = mount(<TaskList {...props} />);

describe('(Component) TaskList', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should have a div container element with class .task-list', () => {
    expect(wrapper.find('.task-list')).to.have.length(1);
  });

  it('should have three (3) Tasks', () => {
    expect(wrapper.find('.task')).to.have.length(3);
  });

  it('should have three (3) TaskItemContainers', () => {
    expect(wrapper.find('.task-item-container')).to.have.length(3);
  });

  it('should have tasks array as a prop', () => {
    expect(wrapper.props().tasks).to.exist;
  });
});
