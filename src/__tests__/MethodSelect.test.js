import React from 'react';
import { mount } from 'enzyme';
import MethodSelect from '../Components/methodSelect.jsx'

describe('<MethodSelect />', () => {
  it('has two methods to choose from', () => {
    const component = mount(<MethodSelect />);
    const selector = component.find('#method').instance()
    expect(selector.options.length).toEqual(2)
  }
)})