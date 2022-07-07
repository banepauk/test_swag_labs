//page object pages from where I get the elements I need,and write the functions that I will use
class CartPage{
    get firstItemRemoveButton(){
        return cy.get('#remove-sauce-labs-backpack')
    }

    get checkoutButton(){
        return cy.get('#checkout')
    }

    removeFirstItem(){
        this.firstItemRemoveButton.click()
    }

}
export const cartPage = new CartPage()