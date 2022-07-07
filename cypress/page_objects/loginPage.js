//page object pages from where I get the elements I need,and write the functions that I will use
class LoginPage{
    get userNameInput(){
        return cy.get('#user-name')
    }

    get passwordInput(){
        return cy.get('#password')
    }

    get loginButton(){
        return cy.get('#login-button')
    }

    get acceptedUsernameBox(){
        return cy.get('#login_credentials')
    }

    get errorMessage(){
        return cy.get('.error-message-container')
    }

    login(userName, password){
        this.userNameInput.type(userName)
        this.passwordInput.type(password)
        this.loginButton.click()
    }

}
export const loginPage = new LoginPage()