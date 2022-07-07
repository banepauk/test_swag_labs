// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { loginPage } from "../page_objects/loginPage"
import { mainPage} from "../page_objects/mainPage"
import { cartPage} from "../page_objects/cartPage"
let username = 'standard_user'
let password = 'secret_sauce'

Cypress.Commands.add('login', () => {
  
  cy.visit('/'),
  loginPage.login(username, password)
})

Cypress.Commands.add('addTwoItems', () =>{
  cy.visit('/')
  loginPage.login(username, password)
  mainPage.addTwoItems()
})

Cypress.Commands.add('checkout', ()=>{
  cy.visit('/')
  loginPage.login(username, password)
  mainPage.addRemoveAndCheckout()
})

//i put some custom commands here to make it easier for me to write tests





