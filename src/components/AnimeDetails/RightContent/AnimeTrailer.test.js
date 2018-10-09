import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AnimeTrailer from './AnimeTrailer';

configure({ adapter: new Adapter() });

describe('<AnimeTrailer />', () => {
  it('Should render <Modal /> on click', () => {
    const wrapper = shallow(<AnimeTrailer />);
    const buttonDiv = wrapper.find('.anime-trailer');
    buttonDiv.simulate('click');
    const showModal = wrapper.state().showModal;
    expect(showModal).toBe(true);
  });
});
