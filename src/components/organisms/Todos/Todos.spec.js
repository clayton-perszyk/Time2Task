import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Todos from '../../organisms/Todos/Todos'
import Title from '../../atoms/Title/Title'
import Task from '../../molecules/Task/Task'
import TaskList from '../../molecules/TaskList/TaskList'
import AddTask from '../../molecules/AddTask/AddTask'


const tasks = [
    {taskId: 0, description: "Work on project", completed: false},
    {taskId: 1, description: "Study Algorithms", completed: false},
    {taskId: 2, description: "Practice the guitar", completed: false}
  ]

const wrapper = mount(<Todos />);

describe('(Component) Todos', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should have a div container element with class .todos', () => {
    expect(wrapper.find('.todos')).to.have.length(1);
  });

  it('should have a Title', () => {
    expect(wrapper.find(Title).props().title).to.equal('To-do List');
  });

  it('should have a TaskList', () => {
    expect(wrapper.find(TaskList)).to.have.length(1);
  });

  it('should have an AddTask ', () => {
    expect(wrapper.find(AddTask)).to.have.length(1);
  });

  it('AddTask should add a new task to tasks', () => {
    wrapper.setState({tasks: tasks});
    const addTaskButton = wrapper.find('.button');
    wrapper.setState({newTask: "Start new hobby"});
    addTaskButton.simulate('click');
    expect(wrapper.state().tasks[3].description).to.equal("Start new hobby");
    expect(wrapper.state().tasks).to.have.length(4);
  });

  it('should have three (3) Task components, if passed tasks array with 3 tasks', () => {
    wrapper.setState({tasks: tasks});
    expect(wrapper.find(Task)).to.have.length(3);
  });

  it('should mark item completed, when checkbox clicked', () => {
    wrapper.setState({tasks: tasks});
    const firstItemCheckbox = wrapper.find('.checkbox').first();
    const taskItemContainer = wrapper.find('.task-item-container').first()
    firstItemCheckbox.simulate('change');
    expect(wrapper.state().tasks[0].completed).to.equal(true);
  });
});
