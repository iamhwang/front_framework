describe('App Test', () => {
  it('login and logout', () => {
    cy.visit('/')
      .contains('Login').click()
      .get('p')
      .should('contain', 'Hello,')
      .get('button')
      .contains('Logout')
      .click()
      .get('h1')
      .should('contain', 'K-concept');
  });
});
