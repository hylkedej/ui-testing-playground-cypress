const sampleAppUrl = '/sampleapp';
const userName = 'Hylke';
const validPassword = 'pwd';
const notValidPassword = 'blablabla';

const userNameField = 'input[name="UserName"]';
const passwordField = 'input[name="Password"]';
const messageLabel = '#loginstatus';
const logInButton = '.btn-primary';
const logOutButton = '.btn-primary'; //yeah, same as logInButton but the demo app is badly written

function logIn(user, password) {
  cy.get(userNameField).type(user);
  cy.get(passwordField).type(password);
};

describe('Logging in', () => {
  beforeEach(() => {
    cy.visit(sampleAppUrl);
  });

  it('with valid credentials should show a welcome message', () => {
    logIn(userName, validPassword);
    cy.get(logInButton).click();
    cy.get(messageLabel).should('contain', `Welcome, ${userName}!`);
  });

  it('with NOT valid credentials should show an invalid username/password message', () => {
    logIn(userName, notValidPassword);
    cy.get(logInButton).click();
    cy.get(messageLabel).should('contain', 'Invalid username/password');
  });
});

describe('Logging out', () => {
  before(() => {
    cy.visit(sampleAppUrl);
  });

  it('should show a user logged out message', () => {
    logIn(userName, validPassword);
    cy.get(logInButton).click();
    cy.get(messageLabel).should('contain', `Welcome, ${userName}!`);
    cy.get(logOutButton).click();
    cy.get(messageLabel).should('contain', 'User logged out.');
  });
});