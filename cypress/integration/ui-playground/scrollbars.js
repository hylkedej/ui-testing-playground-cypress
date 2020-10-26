const hiddenButton = '#hidingButton';

describe('It should be possible to', () => {
  before(() => {
    cy.visit('/scrollbars');
  });

  it('find a hidden button and scroll it into view', () => {
    cy.get(hiddenButton).should('not.be.visible');
    cy.get(hiddenButton).scrollIntoView();
    cy.get(hiddenButton).should('be.visible');
  });
});