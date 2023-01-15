export const navigateToWebsite = () => {
  cy.visit('/')
  cy.get('#loginAppTitle',{timeout: 5000}).contains("Přihlášení do George").should('be.visible')
}
export const loginToWebsite = () => {
  cy.get('[id="input.nickname"]').type("7777777777").type("{enter}")
  cy.get('.flex-grow.ng-binding',{timeout: 10000}).contains("Přihlásit se").should('be.visible')
  cy.get("[id='btn.continue']").click()
  cy.get("button[id='dropdown-nOwn'] span[class='g-button-label']",{timeout:30000}).should('exist')
}