describe('App Test', () => {
  it('Route : /', () => {
    cy.visit('/')
      .get('button')
      .should('contain', 'Login');
  });

  it('Route : /not found url', () => {
    cy.visit('/notfundurl')
      .get('span')
      .should('contain', 'NOT FOUND');
  });
});
