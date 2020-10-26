const startButton = '#startButton';
const stopButton = '#stopButton';
const progressBar = '#progressBar';
const result = '#result';

function checkProgressBarPercentage(desiredPercentage) {
  cy.get(progressBar).invoke('text').then((percentage) => {
    if (percentage >= desiredPercentage) {
      cy.get(stopButton).click();  
    } else {
      cy.wait(40); //need a small wait otherwise cypress crashes
      checkProgressBarPercentage(desiredPercentage);
    };
  });
};

describe('It should be possible to stop the progress bar', () => {
  before(() => {
    cy.visit('/progressbar');
  });
  
  it('at exactly 75%', () => {
    cy.get(startButton).click();
    checkProgressBarPercentage('75%');
    cy.get(result).should('contain', '0');
  });
});