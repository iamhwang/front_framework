describe('App Test', () => {
  it('Route : /', () => {
    cy.visit('/')
      .get('button')
      .should('contain', 'Login');
  });

  it('Route : /MariaDB', () => {
    cy.visit('/MariaDB')
      .get('button')
      .should('contain', 'MariaBD');
  });

  it('Route : /not found url', () => {
    cy.visit('/notfundurl')
      .get('p')
      .should('contain', 'Hello? NotFound!');
  });
});
