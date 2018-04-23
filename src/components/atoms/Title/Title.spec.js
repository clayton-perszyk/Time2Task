import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Title from './Title'

const props = {
  title: "Pomodoro"
}

const wrapper = shallow(<Title {...props}/>);

describe('(Component) Title', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should contain a h1 element', () => {
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should render children passed as props', () => {
    expect(wrapper.props().children.props.children).to.equal('Pomodoro');
  });
});
