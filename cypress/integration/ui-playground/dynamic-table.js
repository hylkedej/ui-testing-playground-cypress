const warningLabel = '.bg-warning';

describe('IT should be possible to', () => {
  before(() => {
    cy.visit('/dynamictable');
  })

  it('read data from a dynamic table', () => {
    cy.get('span').contains('Chrome').siblings().contains('%').invoke('text').then((percentageChromeCpu) => {
      cy.get(warningLabel).should('contain', percentageChromeCpu);
    });
  });
});