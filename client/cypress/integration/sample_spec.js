
describe('Testing Homepage', () => {
  it('Visits Hogwarts homepage', () => {
    cy.visit('http://localhost:3000/');
  });
  it('Clicks Signup button and goes to Signup page', () => {
    cy.get('#signup-btn').click();
  });
  it('It fills the form with data', () => {
    cy.get('#name').type('Kiko');
    cy.get('#email').type('kiko@codeworks.me');
    cy.get('#phone').type('666HELL666');
    cy.get('#location').type('BCN');
    cy.get('#password').type('kikin');
    cy.get('.registration-form > button').click();
    // cy.get('form').submit();
  });
  // it('', () => {

  // })
  //click login
  //cy.get('.nav-btn').click();
});
