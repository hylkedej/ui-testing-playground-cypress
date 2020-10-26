describe('It should be possible to', () => {
  before(() => {
    cy.visit('/verifytext');
  });
  
  it('find some text on a badly formatted page', () => {
    cy.get('.bg-primary').should('contain', 'Welcome UserName');
  });
});