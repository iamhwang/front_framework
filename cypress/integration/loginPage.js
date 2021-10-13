describe('App Test', () => {
  it('login and logout', () => {
    cy.visit('/')
      .get('#username')
      .type('iamE2E')
      .get('#password')
      .type('password')
      .get('button')
      .contains('Login')
      .click()
      .get('input')
      .should('value', 'iamE2E')
      .get('h1')
      .should('contain', 'PROFILE')
      .get('#logoutButton')
      .click()
      .get('h1')
      .should('contain', 'K-concept');
  });
});
