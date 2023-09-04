///<reference types="cypress" />
import selectors from '../../support/selectors.js'
import {data} from '../../fixtures/data.json'

cy.on('uncaught:exception', (err, runnable) => false);

//Test Case #3
describe('Main menu options', () => {

  before(()=>{
    cy.visit('/');
  })

//Step_Seq 1)
it('Products', () =>{

  cy.get(selectors.button_Products).click();
  
  cy.get(selectors.module_ProductsBlock).should('be.visible');
  cy.screenshot('Test_3_step_1');
})
});