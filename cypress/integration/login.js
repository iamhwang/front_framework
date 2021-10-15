describe('App Test', () => {
  it('login and logout', () => {
    cy.visit('/')
      // 회원가입
      .get('#username')
      .type('e2eTest')
      .get('#password')
      .type('password')
      .get('button')
      .contains('Create')
      .click()
      // 로그인 시도
      .get('button')
      .contains('Login')
      .click()
      // 로그인 성공
      .get('input')
      .should('value', 'e2eTest')
      .get('h1')
      .should('contain', 'PROFILE')
      // 로그아웃
      .get('#logoutButton')
      .click()
      .get('h1')
      .should('contain', 'K-concept')
      // 재로그인
      .get('#username')
      .type('e2eTest')
      .get('#password')
      .type('password')
      .get('button')
      .contains('Login')
      .click()
      // 회원탈퇴
      .get('button')
      .contains('Delete')
      .click()
      // 재로그인 시도
      .get('#username')
      .type('e2eTest')
      .get('#password')
      .type('password')
      .get('button')
      .contains('Login')
      .click()
      // 실패
      .get('button')
      .contains('Logout')
      .should('not.exist');
  });
});
