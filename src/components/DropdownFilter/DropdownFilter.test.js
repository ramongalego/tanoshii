import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import DropdownFilter from './DropdownFilter';

afterEach(cleanup);

const filter = 'highest-rated';

test('<DropdownFilter />', () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <DropdownFilter filter={filter} />
    </MemoryRouter>
  );

  fireEvent.change(getByTestId('dropdown-filter'), {
    target: { value: 'current-season' }
  });

  expect(getByTestId('dropdown-filter').value).toBe('current-season');
});