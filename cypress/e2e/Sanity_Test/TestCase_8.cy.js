///<reference types="cypress" />
import selectors from '../../support/selectors.js'
import {data} from '../../fixtures/data.json'

cy.on('uncaught:exception', (err, runnable) => false);

//Test Case #8
describe('Main menu options', () => {

  before(()=>{
    cy.visit('/');
  })

//Step_Seq 1)
it('Blog', () =>{

  cy.get(selectors.button_Blog).click();
  
  cy.get(selectors.module_BlogBlock).should('be.visible');
  cy.screenshot('Test_8_step_1');
})
});