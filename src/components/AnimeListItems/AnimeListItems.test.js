import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import AnimeListItems from './AnimeListItems';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test('<AnimeListItems />', () => {
  render(
    <MemoryRouter>
      <AnimeListItems />
    </MemoryRouter>
  );
  
  expect(console.error).toHaveBeenCalled();
});

const data = [{
  mal_id: 123,
  image_url: 'random_url.jpg',
  title: 'Amazing Anime',
  start_date: '01/01/1900',
  type: 'Highest Rated',
  episodes: '64',
  score: '10'
}]

test('<AnimeListItems /> with data', () => {
  render(
    <MemoryRouter>
      <AnimeListItems data={data} />
    </MemoryRouter>
  );
  
  expect(console.error).not.toHaveBeenCalled();
});