import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LogoutFormPage from './LogoutFormPage';

describe('LogoutFormPage 렌더링될 때', () => {
  const handleClick = jest.fn();

  it('id, token이 표출된다', () => {
    const id = 'iamID';
    const accessToken = 'iamAccessToken';

    render(
      <LogoutFormPage
        id={id}
        accessToken={accessToken}
      />,
    );

    const inputValue = document.getElementById('id').value;
    expect(inputValue).toBe(id);
  });

  context('로그아웃 버튼을 클릭하면', () => {
    it('handleClick 함수가 실행된다', () => {
      const { getByText } = render(
        <LogoutFormPage
          onClick={handleClick}
        />,
      );

      const input = getByText('Logout');
      fireEvent.click(input);

      expect(handleClick).toBeCalledTimes(1);
    });
  });
});
