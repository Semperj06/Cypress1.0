///<reference types="cypress" />
import selectors from '../../support/selectors.js'
import {data} from '../../fixtures/data.json'

cy.on('uncaught:exception', (err, runnable) => false);

//Test Case #10
describe('Main menu options', () => {

  before(()=>{
    cy.visit('/');
  })

//Step_Seq 1)
it('Contact', () =>{

  cy.get(selectors.button_Contact).click();
  
  cy.get(selectors.module_ContactBlock).should('be.visible');
  cy.screenshot('Test_10_step_1');
})
});