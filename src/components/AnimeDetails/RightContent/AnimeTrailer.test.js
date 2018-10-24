import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import AnimeTrailer from './AnimeTrailer';

console.error = jest.fn();

test ('<AnimeTrailer />', () => {
  const { debug, getByTestId } = render(<AnimeTrailer />);

  fireEvent.click(getByTestId('anime-trailer'));
  
  debug();
});