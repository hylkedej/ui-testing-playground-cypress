const ajaxDataLabel = '.bg-success';

Cypress.config('requestTimeout', 16000); //increase standard timeout for the slow AJAX request

describe('It should be possible to', () => {
  before(()=> {
    cy.visit('/ajax')
  });

  it('trigger an ajax request and wait for it to be finished', () => {
    cy.server();
    cy.route('GET', '/ajaxdata').as('getAjaxData');
    cy.get('#ajaxButton').click();
    cy.wait('@getAjaxData');
  });

  it('and check if the UI is showing the correct data', () => {
    cy.get(ajaxDataLabel).should('be.visible');
    cy.get(ajaxDataLabel).should('contain', 'Data loaded with AJAX get request.');
  });
});