///<reference types="cypress" />
import selectors from '../../support/selectors.js'
import {data} from '../../fixtures/data.json'

cy.on('uncaught:exception', (err, runnable) => false);

//Test Case #2
describe('Main menu options', () => {

  before(()=>{
    cy.visit('/');
  })

//Step_Seq 1)
it('About', () =>{

  cy.get(selectors.button_About).click();
  
  cy.get(selectors.module_ProductBlock).should('be.visible');
  cy.screenshot('Test_2_step_1');
})
});