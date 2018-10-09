import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from './SearchBar';

configure({ adapter: new Adapter() });

describe('<SearchBar />', () => {
  it('Should render <Results /> if toggleShowResults is true', () => {
    const wrapper = shallow(<SearchBar />);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'test' } });
    const showResults = wrapper.state().showResults;
    expect(showResults).toEqual(true);
  });
});
