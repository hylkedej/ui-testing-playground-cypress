const succesLabel = '.bg-success';
const button = '#ajaxButton';

Cypress.config('defaultCommandTimeout', 16000); //increase standard timeout for the delay

describe('It should be possible to wait patiently', () => {
  before(() => {
    cy.visit('/clientdelay');
  });

  it('for slow clients to be done with whatever they do', () => {
    cy.get(succesLabel).should('not.exist');
    cy.get(button).click();
    cy.get(succesLabel).should('be.visible');
    cy.get(succesLabel).should('contain', 'Data calculated on the client side.');
  });
});