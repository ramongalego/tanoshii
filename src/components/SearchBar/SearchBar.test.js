import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import SearchBar from './SearchBar';

afterEach(cleanup);

test('<SearchBar />', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <SearchBar />
    </MemoryRouter>
  );

  expect(getByTestId('search-bar')).toBeTruthy();
});

console.error = jest.fn();

test('<SearchBar /> input onChange renders <Results />', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <SearchBar />
    </MemoryRouter>
  );

  fireEvent.change(getByTestId('search-bar-input'), {
    target: { value: 'dragon' },
  });

  expect(getByTestId('search-bar-input').value).toBe('dragon');
});