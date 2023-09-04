///<reference types="cypress" />
import selectors from '../../support/selectors.js'
import {data} from '../../fixtures/data.json'

cy.on('uncaught:exception', (err, runnable) => false);

//Test Case #6
describe('Main menu options', () => {

  before(()=>{
    cy.visit('/');
  })

//Step_Seq 1)
it('Promotion', () =>{

  cy.get(selectors.button_Promotions).click();
  
  cy.get(selectors.module_PromotionBlock).should('be.visible');
  cy.screenshot('Test_6_step_1');
})
});