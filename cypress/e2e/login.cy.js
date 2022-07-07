/// <reference types="Cypress" />
import { loginPage } from '../page_objects/loginPage'
const faker = require ('@faker-js/faker')


describe('login', () => {
  let validUsername = 'standard_user';
  let validPassword = 'secret_sauce';
  let invalidUsername = faker.random.alpha({ count: 5 });
  let invalidPassword = faker.random.alpha({ count: 8});
  beforeEach('visit', ()=>{
    cy.visit('https://www.saucedemo.com')
  
  })
//There are a total of 4 tests below, 3 negative and the last one is positive
  it('invalid username', () => {
    loginPage.login(invalidUsername, validPassword)
    cy.url().should('not.include', '/inventory')
    loginPage.errorMessage.should('be.visible')
      .and('have.text', 'Epic sadface: Username and password do not match any user in this service')
      .and('have.css', 'color', 'rgb(72, 76, 85)')
    loginPage.acceptedUsernameBox.should('be.visible')
  })

  it('invalid password', () => {
    loginPage.login(validUsername, invalidPassword)
    cy.url().should('not.include', '/inventory')
    loginPage.errorMessage.should('be.visible')
      .and('have.text', 'Epic sadface: Username and password do not match any user in this service')
      .and('have.css', 'color', 'rgb(72, 76, 85)')
    loginPage.acceptedUsernameBox.should('be.visible')
  })

  it('invalid username and password', () => {
    loginPage.login(invalidUsername, invalidPassword)
    cy.url().should('not.include', '/inventory')
    loginPage.errorMessage.should('be.visible')
      .and('have.text', 'Epic sadface: Username and password do not match any user in this service')
      .and('have.css', 'color', 'rgb(72, 76, 85)')
    loginPage.acceptedUsernameBox.should('be.visible')
  })
//I take env from cypress.config.js
  it('valid login', () => {
    loginPage.login(
      Cypress.env('VALID_USER_USERNAME'),
      Cypress.env('VALID_USER_PASSWORD')
    )
    cy.url().should('include', '/inventory')
  })
})