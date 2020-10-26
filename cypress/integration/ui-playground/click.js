import { containsSelector as cs } from '../../helpers/selecter-utils'

const blueButton = cs('btn-primary');
const greenButton = '#badButton';

describe('It should be posible', () => {
  before(() => {
    cy.visit('/click');
  });
  
  it('to click on a difficult to click button', () => {
    cy.get(blueButton).click();
    cy.get(greenButton).should('have.attr', 'class').and('contain', 'btn-success');
  });
});