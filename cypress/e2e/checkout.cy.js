/// <reference types="Cypress" />
import { loginPage } from '../page_objects/loginPage'
import { mainPage } from '../page_objects/mainPage'
import { cartPage} from '../page_objects/cartPage'
import { checkoutPage } from '../page_objects/checkoutPage'
const faker = require ('@faker-js/faker')

//testing all checkout process, last one is positive
describe('checkout', ()=>{

    let validFirstName = faker.name.firstName()
    let validLastName = faker.name.lastName()
    let validZipCode = faker.address.zipCode()
    

    beforeEach('get to checkout', ()=>{
        cy.checkout()
        cy.url().should('include', '/checkout')
    })

    it('continue without first name', ()=>{
        checkoutPage.checkoutWithoutFirstName(validLastName, validZipCode)
        cy.url().should('contain', '/checkout')
        checkoutPage.errorMessage.should('be.visible')
            .and('have.text', 'Error: First Name is required')
    })

    it('continue without last name', ()=>{
        checkoutPage.checkoutWithoutLastName(validFirstName, validZipCode)
        cy.url().should('contain', '/checkout')
        checkoutPage.errorMessage.should('be.visible')
            .and('have.text', 'Error: Last Name is required')
    })

    it('continue wtihout zip code', ()=>{
        checkoutPage.checkoutWithoutZipCode(validFirstName, validLastName)
        cy.url().should('contain', '/checkout')
        checkoutPage.errorMessage.should('be.visible')
            .and('have.text', 'Error: Postal Code is required')
    })

    it('continue with valid credentials', ()=>{
        checkoutPage.checkoutInformation(validFirstName, validLastName, validZipCode)
        cy.url().should('contain', '/checkout-step-two')
        checkoutPage.summaryInfo.should('be.visible')
        checkoutPage.finishButton.click()
        cy.url().should('contain', '/checkout-complete')
        checkoutPage.completeHeader.should('be.visible')
            .and('have.text', 'THANK YOU FOR YOUR ORDER')

    })
})