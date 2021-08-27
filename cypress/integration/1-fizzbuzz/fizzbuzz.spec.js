/// <reference types="cypress" />

describe('FizzBuzz tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Should exist div with text FizzBuzz', () => {
    cy.get('div[id="isbn-card-title"]', { timeout: 10000 })
      .contains('FizzBuzz')
      .should('exist');
  });
  it('Should exist div with text Which number is Fizz, Buzz, or FizzBuzz?', () => {
    cy.get('div.p-card-subtitle', { timeout: 10000 })
      .contains('FizzBuzz')
      .should('exist');
  });
  it('Should exist 100 fizzbuzz cards', () => {
    cy.get('p-card.fizzbuzz-card', { timeout: 10000 }).should(
      'have.length',
      100
    );
  });
  it('Should exist card with the number 1 as title', () => {
    cy.get('input', { timeout: 10000 }).should('be.enabled').type(1);

    cy.get('p-card.fizzbuzz-card', { timeout: 10000 }).should(
      'have.length',
      20
    );

    cy.get('p-card.fizzbuzz-card[data-key=1]').should('have.text', ' 1 ');
  });
});
