import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer 렌더링된다', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        id: 'iamtest1',
        password: 'password1',
      },
    }));
  });

  context('LoginFormPage 렌더링된다', () => {
    it('로그인 버튼이 보인다', () => {
      const { container } = render(<LoginFormContainer />);

      expect(container).toHaveTextContent('K-conceptLogin GROUPWARE');
    });
  });

  context('username, password 입력한다', () => {
    it('store loginfields 데이터가 바뀐다', () => {
      const { getByPlaceholderText } = render((
        <LoginFormContainer />
      ));

      fireEvent.change(getByPlaceholderText('username'), {
        target: { value: 'aaaa' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'k-concept/changeLoginFields',
        payload: {
          name: 'id',
          value: 'aaaa',
        },
      });
    });
  });
});
