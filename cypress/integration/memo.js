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
      .type('e2e 테스트 시작')
      .get('button')
      .contains('memo')
      .click()
      .get('p')
      .should('contain', 'e2e 테스트 시작')
      // 메모 입력 2
      .get('#memo')
      .type('메모 삭제 테스트')
      .get('button')
      .contains('memo')
      .click()
      .get('p')
      .should('contain', '메모 삭제 테스트')
      // 메모 삭제
      .get('button')
      .contains('X')
      .click()
      .get('p')
      .contains('메모 삭제 테스트')
      .should('not.exist')
      .get('button')
      .contains('X')
      .click()
      .get('p')
      .contains('e2e 테스트 시작')
      .should('not.exist');
  });
});
