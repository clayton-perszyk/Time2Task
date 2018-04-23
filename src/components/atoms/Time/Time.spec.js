import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Time from './Time'

const props = {
  timeValue: "25"
}

const wrapper = shallow(<Time {...props} />);

describe('(Component) Time', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should contain a span element', () => {
    expect(wrapper.find('span')).to.have.length(1);
  });

  it('should render timeValue prop as child', () => {
    expect(wrapper.props().children).to.equal('25');
  });
});
