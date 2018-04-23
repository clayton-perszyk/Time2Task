import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Message from './Message'

const props = {
  message: 'This is a message for you!'
}

const wrapper = shallow(<Message {...props} />);

describe('(Component) Message', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should contain a div element', () => {
    expect(wrapper.find('div')).to.have.length(1);
  })

  it('should contain class of message', () => {
    expect(wrapper.find('.message')).to.have.length(1);
  });

  it('should contain a paragraph element for the message content', () => {
    expect(wrapper.find('p')).to.have.length(1);
  })

  it('should render a message prop as child', () => {
    expect(wrapper.find('p').props().children).to.equal('This is a message for you!');
  });
});
