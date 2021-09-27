import React from 'react';

import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import LoginPage from './LoginPage';

jest.mock('react-redux');

describe('LoginFormContainer 렌더링될 때', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  context('로그인 토큰이 존재한다면', () => {
    beforeEach(() => {
      dispatch.mockClear();
      useSelector.mockImplementation((selector) => selector({
        accessToken: 'accessToken',
        user: {
          no: '1',
          id: '2',
        },
      }));
    });

    it('LogoutFormContainer 렌더링된다', () => {
      const { container } = render(<LoginPage />);

      expect(container).toHaveTextContent('PROFILE');
    });
  });

  context('로그인 토큰이 존재하지 않으면', () => {
    beforeEach(() => {
      dispatch.mockClear();

      useSelector.mockImplementation((selector) => selector({
        accessToken: '',
      }));
    });

    it('LoginFormContainer 렌더링된다', () => {
      const { container } = render(<LoginPage />);

      expect(container).toHaveTextContent('GROUPWARE');
    });
  });
});
