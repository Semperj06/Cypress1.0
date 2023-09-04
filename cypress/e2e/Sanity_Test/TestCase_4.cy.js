///<reference types="cypress" />
import selectors from '../../support/selectors.js'
import {data} from '../../fixtures/data.json'

cy.on('uncaught:exception', (err, runnable) => false);

//Test Case #4
describe('Main menu options', () => {

  before(()=>{
    cy.visit('/');
  })

//Step_Seq 1)
it('Services', () =>{

  cy.get(selectors.button_Services).click();
  
  cy.get(selectors.module_ServicesBlock).should('be.visible');
  cy.screenshot('Test_4_step_1');
})
});