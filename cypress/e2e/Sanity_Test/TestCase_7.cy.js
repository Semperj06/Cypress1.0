///<reference types="cypress" />
import selectors from '../../support/selectors.js'
import {data} from '../../fixtures/data.json'

cy.on('uncaught:exception', (err, runnable) => false);

//Test Case #7
describe('Main menu options', () => {

  before(()=>{
    cy.visit('/');
  })

//Step_Seq 1)
it('Careers', () =>{

  cy.get(selectors.button_Careers).click();
  
  cy.get(selectors.module_CareersBlock).should('be.visible');
  cy.screenshot('Test_7_step_1');
})
});