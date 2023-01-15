export const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor")

When('User searches with {string}',(keyword)=>{
  cy.get('[id="dropdown-gqbj"]').should('exist').type(keyword).type("{enter}")
})

Then('Search results titles should contain {string}',(keyword)=>{
  cy.xpath('.//table/tbody//td[3]').should('exist')
  .each(($el, index, $list) => {
    cy.get($el).contains(keyword, {matchCase: false})
  })
})
Then('Number of Results should match the {int} of the user',(transactionsCount)=>{
  cy.xpath('.//table/tbody//td[3]').should('exist').should('have.length',transactionsCount)
})

Then('{string} gets displayed in the search results',(nonMatchingResultsMsg)=>{
  cy.get('.g-status-info-title').should('exist').should('have.text',nonMatchingResultsMsg)
})

Then('Search text-box displays the clear button',()=>{
  cy.get("button[class='g-button g-button-variant-tertiary g-button-size-small g-button-hidden-label-always g-button-full-width-never clear-button--VUuE3SvY']",{timeout: 2000}).should('exist')
})

When('User clicks the clear button',()=>{
  cy.get("button[class='g-button g-button-variant-tertiary g-button-size-small g-button-hidden-label-always g-button-full-width-never clear-button--VUuE3SvY']").click()
})

Then('Results are cleared and {string} gets displayed in the search results',(emptyReponseMsg)=>{
  cy.xpath('.//table/tbody//td[3]').should('not.exist')
  cy.get("h4[class='text-center']").should('exist').should('contain.text',emptyReponseMsg)
})

When('User filters search results page using {string} and {string}',(startDate,endDate)=>{
  cy.get(".g-button.g-button-variant-secondary.g-button-size-medium.g-button-full-width-below-sm.dateTriggerButton--WTMwI").click()
  cy.get('#start-field-rmwg').should('be.visible').type(startDate)
  cy.get('#end-field-gben').should('be.visible').type(endDate)
  cy.get("button[class='g-button g-button-variant-primary g-button-size-medium g-button-full-width-below-sm']").should('exist').click()
})