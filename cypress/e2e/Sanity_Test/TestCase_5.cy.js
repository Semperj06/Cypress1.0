///<reference types="cypress" />
import selectors from '../../support/selectors.js'
import {data} from '../../fixtures/data.json'

cy.on('uncaught:exception', (err, runnable) => false);

//Test Case #5
describe('Main menu options', () => {

  before(()=>{
    cy.visit('/');
  })

//Step_Seq 1)
it('Tools', () =>{

  cy.get(selectors.button_Tools).click();
  
  cy.get(selectors.module_ToolsBlock).should('be.visible');
  cy.screenshot('Test_5_step_1');
})
});