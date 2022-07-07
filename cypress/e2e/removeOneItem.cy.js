/// <reference types="Cypress" />
import { loginPage } from '../page_objects/loginPage'
import { mainPage } from '../page_objects/mainPage'
import { cartPage, RemovePage} from '../page_objects/cartPage'


describe('remove one item and check it', ()=>{
//command from commands.js for adding 2 items
    before('add two items', ()=>{
        cy.addTwoItems()
        cy.url().should('contain', '/cart')
    })
//in this test i decide to test only remove item
    it('remove first item', ()=>{
        cartPage.removeFirstItem()
        mainPage.cartList.should('have.length', '1')
        mainPage.firstItemName.should('have.text', 'Sauce Labs Bike Light')
        cy.url().should('contain', '/cart')
    })
})