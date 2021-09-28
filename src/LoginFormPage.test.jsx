import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginFormPage from './LoginFormPage';

describe('LoginFormPage 렌더링될 때', () => {
  const handleClick = jest.fn();
  const handleChange = jest.fn();

  it('id input 렌더링된다', () => {
    const { getByPlaceholderText } = render(<LoginFormPage />);

    expect(getByPlaceholderText('username')).toBeVisible();
  });

  context('id를 입력하면', () => {
    it('handleChange 함수가 실행된다', () => {
      const { getByLabelText } = render(
        <LoginFormPage
          onChange={handleChange}
        />,
      );

      const check = {
        input: getByLabelText('ID'),
        name: 'id',
        value: 'user@test.com',
      };

      fireEvent.change(check.input, { target: { value: check.value } });
      expect(handleChange).toBeCalledWith({
        name: check.name,
        value: check.value,
      });
    });
  });

  context('로그인 버튼을 클릭하면', () => {
    it('handleClick 함수가 실행된다', () => {
      const { getByText } = render(
        <LoginFormPage
          onClick={handleClick}
        />,
      );

      fireEvent.click(getByText('Login'));
      expect(handleClick).toBeCalled();
    });
  });
});
