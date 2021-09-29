describe('App Test', () => {
  it('login and logout', () => {
    cy.visit('/')
      .get('#username').type('iamTEST')
      .get('button')
      .contains('Login')
      .click()
      .get('input')
      .should('value', 'iamTEST')
      .get('#logoutButton')
      .click()
      .get('h1')
      .should('contain', 'K-concept');
  });
});
