import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import LogoutFormContainer from './LogoutFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer 렌더링된다', () => {
  const dispatch = jest.fn();
  const handleClickLogoutButton = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
    useSelector.mockImplementation((selector) => selector({
      loginUser: {
        id: 'sdfsdf',
      },
      accessToken: 'iamtoken',
    }));
  });

  context('LoginFormPage 렌더링된다', () => {
    it('로그아웃 버튼이 보인다', () => {
      const { container } = render(<LogoutFormContainer />);

      expect(container).toHaveTextContent('PROFILEIDTOKENLogout');
    });
  });

  context('로그아웃 버튼을 클릭한다', () => {
    it('setAccessToken가 실행된다', () => {
      const { getByText } = render(
        <LogoutFormContainer
          onClick={handleClickLogoutButton}
        />,
      );

      fireEvent.click(getByText('Logout'));
      expect(dispatch).toBeCalledTimes(1);
      expect(dispatch).toBeCalledWith({
        type: 'k-concept/setAccessToken',
        payload: '',
      });
    });
  });
});
