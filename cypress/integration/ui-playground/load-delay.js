import { containsSelector as cs } from '../../helpers/selecter-utils';

const buttonAfterLoading = cs('btn-primary');

describe('After clicking a link', () => {
  before(() => {
    cy.visit('/');
  });

  it('it should patiently wait for the page to load', () => {
    cy.get('a').contains('Load Delay').click();
    cy.get(buttonAfterLoading).should('exist').and('be.visible');
  });
})