/// <reference types="Cypress" />
import { loginPage } from '../page_objects/loginPage'
import { mainPage } from '../page_objects/mainPage'

describe('add items and check it', ()=>{
    //before each test, I made the login work via a new command set in commands.js
    beforeEach('login',()=>{
        cy.login()
        cy.url().should('contain', '/inventory')

    } )

    //I added both items in one test, after each addition i put assertions to make sure everything is pass
    it('add first item to cart', ()=>{
       
        mainPage.addOneItemToCart()
        mainPage.cartBadge.should('have.length', 1)
        mainPage.cartBadgeSum.should('be.visible')
            .and('have.css', 'background-color', 'rgb(226, 35, 26)')
        cy.url().should('contain', '/inventory')
        mainPage.itemContainer.should('be.visible')
        mainPage.openAndAddSecondItem()
        mainPage.cartBadgeSum.should('be.visible')
        cy.url().should('contain', '/inventory')
        mainPage.getCart()
        mainPage.cartList.should('be.visible')
            .and('have.length', 2)
        mainPage.firstItemName.should('not.eq', mainPage.secondItemName)
        mainPage.continueShoppingButton.should('be.visible')
    })

  
})
