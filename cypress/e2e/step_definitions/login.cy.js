import { loginToWebsite, navigateToWebsite } from "../../support/login"
const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor")

Given('User navigates to the website', ()=> {
    navigateToWebsite()
  })
Given('User logs-in successfully', ()=>{
  loginToWebsite()
})

Then('User is at the homepage Url', ()=>{
  cy.url().should("eq","https://george.csas.cz/index.html?country=CZ&at=c#/overview")
  cy.get('.modal-header > .g-button')
  .then($body => {
    if ($body.find('.g-button-label').length) {
      cy.get('.modal-header > .g-button').click()
    }
  })
})