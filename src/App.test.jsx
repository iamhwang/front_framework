import React from 'react';

import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App.jsx 렌더링되면', () => {
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
  context('URL이 / 라면', () => {
    it('화면에 GROUPWARE 글자가 보인다', () => {
      const { getByText } = renderApp({ path: '/' });

      expect(getByText(/GROUPWARE/)).not.toBeNull();
    });
  });
});
