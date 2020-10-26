describe('When double clicking a link', () => {
  before(() => {
    cy.visit('/mouseover');
  });

  it('the count should be increased twice', () => {
    cy.contains('Click me').dblclick();
    cy.get('#clickCount').should('contain', '2');
  });
});