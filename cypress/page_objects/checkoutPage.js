//page object pages from where I get the elements I need,and write the functions that I will use
class CheckoutPage{
    get firstNameInput(){
        return cy.get('#first-name')
    }

    get lastNameInput(){
        return cy.get('#last-name')
    }

    get zipCodeInput(){
        return cy.get('#postal-code')
    }

    get continueButton(){
        return cy.get('#continue')
    }

    get errorMessage(){
        return cy.get('.error-message-container')
    }

    get finishButton(){
        return cy.get('#finish')
    }

    get summaryInfo(){
        return cy.get('.summary_info')
    }

    get completeHeader(){
        return cy.get('.complete-header')
    }

    checkoutInformation(firstName, lastName, zipCode){
        this.firstNameInput.type(firstName)
        this.lastNameInput.type(lastName)
        this.zipCodeInput.type(zipCode)
        this.continueButton.click()
    }

    checkoutWithoutFirstName(lastName, zipCode){
        this.lastNameInput.type(lastName)
        this.zipCodeInput.type(zipCode)
        this.continueButton.click()
    }
    checkoutWithoutLastName(firstName, zipCode){
        this.firstNameInput.type(firstName)
        this.zipCodeInput.type(zipCode)
        this.continueButton.click()
    }

    checkoutWithoutZipCode(firstName, lastName){
        this.firstNameInput.type(firstName)
        this.lastNameInput.type(lastName)
        this.continueButton.click()
    }
}

export const checkoutPage = new CheckoutPage()