import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Results from './Results';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test('<Results />', () => {
  render(
    <MemoryRouter>
      <Results />
    </MemoryRouter>
  );

  expect(console.error).toHaveBeenCalled();
});

const data = [{
  mal_id: 123,
  image_url: 'random_url.jpg',
  title: 'Amazing Anime',
  type: 'Highest Rated'
}]

test('<Results /> with data', () => {
  render(
    <MemoryRouter>
      <Results data={data} />
    </MemoryRouter>
  );

  expect(console.error).not.toHaveBeenCalled();
});