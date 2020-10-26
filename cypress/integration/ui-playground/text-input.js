import { containsSelector as cs } from '../../helpers/selecter-utils'

const text = 'We hebben de button een update gegeven!';
const button = cs('btn-primary');
const inputField = '#newButtonName';

describe('When typing some text', () => {
  before(() => {
    cy.visit('/textinput');
  });

  it('it should update the button text', () => {
    cy.get(inputField).type(text);
    cy.get(button).click();
    cy.get(button).should('contain', text);
  });
});