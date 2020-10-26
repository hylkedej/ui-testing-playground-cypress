describe('It should be possible to', () => {
  before(() => {
    cy.visit('/nbsp');
  });

  it('select a button by using a more reliable locator than XPATH', () => {
    cy.get('.btn-primary');
  });
});