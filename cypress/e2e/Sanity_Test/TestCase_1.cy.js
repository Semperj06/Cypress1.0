///<reference types="cypress" />
import selectors from '../../support/selectors.js'
import {data} from '../../fixtures/data.json'

cy.on('uncaught:exception', (err, runnable) => false);

//Test Case #1
describe('Main menu options', () => {

  before(()=>{
    cy.visit('/');
  })

//Step_Seq 1)
it('Home', () =>{
  
  cy.get(selectors.button_Home).click();

  cy.get(selectors.module_mainMenuBlock).should('be.visible');
  cy.screenshot('Test_1_step_1');
})
});