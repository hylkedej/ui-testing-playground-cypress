describe('It should be possible to click', () => {
  before(() => {
    cy.visit('/dynamicid');
  });

  it('on a button with dynamic ID', () => {
    cy.get('.btn').click();
  });
});