import './login'
import 'cypress-mochawesome-reporter/register';
require('@cypress/xpath');
///   <reference types="Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })