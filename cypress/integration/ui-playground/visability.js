const hideButten = '#hideButton';
const removedButton = '#removedButton';
const zeroWidthButton = '#zeroWidthButton';
const transparentButton = '#transparentButton';
const invisibleButton = '#invisibleButton';
const notdisplayedButton = '#notdisplayedButton';
const offscreenButton = '#offscreenButton';

function checkElementIsOffscreen(element) {
  cy.get(element).then( $el => {
    const coordinates = $el[0].getBoundingClientRect();
    expect(coordinates.top).to.be.below(0);
    expect(coordinates.bottom).to.be.below(0);
    expect(coordinates.left).to.be.below(0);
    expect(coordinates.right).to.be.below(0);
  });
};

describe('Checking visability of elements', () => {
  before(() => {
    cy.visit('/visibility');
  });

  it('all elements should be visible BEFORE clicking the hide button', () => {
    cy.get(removedButton).should('be.visible');
    cy.get(zeroWidthButton).should('be.visible');
    cy.get(transparentButton).should('be.visible').should('not.have.attr', 'style');
    cy.get(invisibleButton).should('be.visible');
    cy.get(notdisplayedButton).should('be.visible');
    cy.get(offscreenButton).should('be.visible');
  }); 

  it('all elements should be hidden AFTER clicking the hide button', () => {
    cy.get(hideButten).click();
    cy.get(removedButton).should('not.be.visible');
    cy.get(zeroWidthButton).should('not.be.visible');
    cy.get(transparentButton).should('have.attr', 'style', 'opacity: 0;');
    cy.get(invisibleButton).should('not.be.visible');
    cy.get(notdisplayedButton).should('not.be.visible');
    checkElementIsOffscreen(offscreenButton);
  })
});