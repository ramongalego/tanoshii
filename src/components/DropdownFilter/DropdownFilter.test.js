import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DropdownFilter from './DropdownFilter';
import { withRouter } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('<DropdownFilter />', () => {
  it('Should change selected state on change', () => {
    const DropdownComponent = withRouter(<DropdownFilter />);
    const wrapper = shallow(<DropdownComponent />);
    const select = wrapper.find('select');
    select.simulate('change', { target: { value: 'test'} });
    const selected = wrapper.state().selected;
    expect(selected).toBe('test');
  });
});