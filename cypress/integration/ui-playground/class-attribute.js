import { containsSelector as cs } from '../../helpers/selecter-utils';

const blueButton = cs('btn-primary');

describe('It should be possible to click on a button', () => {
  before(() => {
    cy.visit('/classattr');
  });

  it('based on partial classname', () => {
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Primary button pressed')
    });

    cy.get(blueButton).click();
  });
});