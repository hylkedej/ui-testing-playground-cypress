describe('It should be possible to click on a green button', () => {
  before(() => {
    cy.visit('/hiddenlayers');
  });

  it('and have it being covered after that', () => {
    cy.get('#blueButton').should('not.exist');
    cy.get('#greenButton').click();
    cy.get('#blueButton').should('exist');
  });
});