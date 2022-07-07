const { defineConfig } = require("cypress");
module.exports = defineConfig({
  chromeWebSecurity : false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'https://www.saucedemo.com',
    env : {
      VALID_USER_USERNAME: 'standard_user',
      VALID_USER_PASSWORD: 'secret_sauce'
    },
   "chromeWebSecurity": false
  },
  "chromeWebSecurity": false
});

//here i set base url and env. 
//I had a lot of problems with chrome security,and I apologize for that 
//i put it in three places, but that was the only way to make cy.visit work for me