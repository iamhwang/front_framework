import React from 'react';

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('render App.jsx', () => {
  beforeEach(() => {
    const dispatch = jest.fn();
    dispatch.mockClear();

    useSelector.mockImplementation((selector) => selector({
      accessToken: '',
      user: {
        no: '',
        id: '',
      },
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
  }

  it('path: /', () => {
    const { getByText } = renderApp({ path: '/' });

    expect(getByText(/GROUPWARE/)).not.toBeNull();
  });
});
