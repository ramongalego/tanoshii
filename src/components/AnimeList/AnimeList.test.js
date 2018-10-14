import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import AnimeList from './AnimeList';

afterEach(cleanup);

console.error = jest.fn();

test('<AnimeList />', () => {
  render(
    <MemoryRouter>
      <AnimeList />
    </MemoryRouter>
  );

  expect(console.error).toHaveBeenCalled();
});