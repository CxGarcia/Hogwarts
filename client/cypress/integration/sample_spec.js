import * as util from '../../src/Services/customersService';
const customer = {
  name: 'Kiko',
  email: 'kikolin@codeworks.me',
  phone: '666HELL666',
  location: 'BCN',
  password: 'kikin'
};

describe('Testing Navbar', () => {
  before(() => {
    cy.visit('http://localhost:3000/');
  });
  it('Navbar "Services" Button redirects to the right section', () => {
    cy.wait(2000);
    cy.get('.nav-services').click();
    cy.url().should('include', '#SERVICES');
  });
  it('Navbar "Book" Button redirects to the right section', () => {
    cy.wait(2000);
    cy.get('.nav-book').click();
    cy.url().should('include', '#BOOK');
  });
  it('Navbar "Contact Us" Button redirects to the right section', () => {
    cy.wait(2000);
    cy.get('.nav-contact').click();
    cy.url().should('include', '#CONTACT');
  });
  it('Navbar "Log In" Button redirects to the right page', () => {
    cy.wait(2000);
    cy.get('.nav-login').click();
    cy.url().should('eq', 'http://localhost:3000/login');
  });
});
describe('Testing (Header???)', () => {
  before(() => {
    cy.visit('http://localhost:3000/');
  });
  it('"SignUp" Button redirects to the right page', () => {
    cy.wait(2000);
    cy.get('#signup-btn').click();
    cy.url().should('eq', 'http://localhost:3000/signUp');
  });
});
