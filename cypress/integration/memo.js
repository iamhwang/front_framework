describe('App Test', () => {
  it('login and logout', () => {
    cy.visit('/')
      // 로그인
      .get('#username')
      .type('iamE2E')
      .get('#password')
      .type('password')
      .get('button')
      .contains('Login')
      .click()
      // 메모 입력 1
      .get('#memo')
      .type('e2e 테스트')
      .get('button')
      .contains('memo')
      .click()
      .get('p')
      .should('contain', 'e2e 테스트')
      // 메모 입력 2
      .get('#memo')
      .type('메모 테스트')
      .get('button')
      .contains('memo')
      .click()
      .get('p')
      .should('contain', '메모 테스트')
      // 메모 삭제
      .get('button')
      .contains('X')
      .click()
      .get('button')
      .contains('X')
      .should('not.exist');
  });
});
