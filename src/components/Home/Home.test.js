import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home';
import AnimeList from '../AnimeList';

configure({ adapter: new Adapter() });

describe('<Home />', () => {
  it('Should render <AnimeList /> 4 times', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(AnimeList)).toHaveLength(4);
  });
});
