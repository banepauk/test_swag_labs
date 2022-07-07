//page object pages from where I get the elements I need,and write the functions that I will use
class MainPage{
    get addFirstItem(){
        return cy.get('#add-to-cart-sauce-labs-backpack')
    }

    get cartBadge(){
        return cy.get('#shopping_cart_container')
    }

    get secondItem(){
        return cy.get('#item_0_title_link')
    }

    get addSecondItem(){
        return cy.get('#add-to-cart-sauce-labs-bike-light')
    }

    get cartBadgeSum(){
        return cy.get('.shopping_cart_badge')
    }

    get itemContainer(){
        return cy.get('#inventory_container')
    }

    get cartList(){
        return cy.get('.cart_item')
    }

    get firstItemName(){
        return cy.get('.inventory_item_name').eq(0)
    }

    get secondItemName(){
        return cy.get('.inventory_item_name').eq(1)
    }

    get continueShoppingButton(){
        return cy.get('#continue-shopping')
    }
    
    get firstItemRemoveButton(){
        return cy.get('#remove-sauce-labs-backpack')
    }
    
     get checkoutButton(){
        return cy.get('#checkout')
    }
    addOneItemToCart(){
        this.addFirstItem.click()
    }

    openAndAddSecondItem(){
        this.secondItem.click()
        this.addSecondItem.click()
    }

    getCart(){
        this.cartBadge.click()
    }

    addTwoItems(){
        this.addFirstItem.click()
        this.secondItem.click()
        this.addSecondItem.click()
        this.cartBadge.click()
    }

    addRemoveAndCheckout(){
        this.addFirstItem.click()
        this.secondItem.click()
        this.addSecondItem.click()
        this.cartBadge.click()
        this.firstItemRemoveButton.click()
        this.checkoutButton.click()
    }
}
export const mainPage = new MainPage()