it('Route : /not found url', () => {
  cy.visit('/notfundurl')
    .get('span')
    .should('contain', 'NOT FOUND');
});
