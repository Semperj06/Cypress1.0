///<reference types="cypress" />
import selectors from '../../support/selectors.js'
import {data} from '../../fixtures/data.json'

cy.on('uncaught:exception', (err, runnable) => false);

//Test Case #9
describe('Main menu options', () => {

  before(()=>{
    cy.visit('/');
  })

//Step_Seq 1)
it('FAQs', () =>{

  cy.get(selectors.button_FAQs).click();
  
  cy.get(selectors.module_FAQsBlock).should('be.visible');
  cy.screenshot('Test_9_step_1');
})
});