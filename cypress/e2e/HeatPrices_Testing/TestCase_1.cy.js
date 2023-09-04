///<reference types="cypress" />
import selectors from '../../support/selectors.js'
import {data} from '../../fixtures/data.json'

cy.on('uncaught:exception', (err, runnable) => false);

describe('Saving calculator -  Heat Prices calculations', () => {

  before(()=>{
    cy.visit('/');
    cy.get(selectors.button_Calculator).click();
  })


it('Step_ 2', () =>{
    
  cy.get(selectors.dropMenu_HeatingSystem).select('aNaturalGas', { force: true });
  cy.get(selectors.dropMenu_HeatingSystem).should('have.value', 'aNaturalGas');

  cy.get(selectors.dropMenu_AFUE1).select('60', { force: true });
  cy.get(selectors.dropMenu_AFUE1).should('have.value', '60');

  cy.get(selectors.dropMenu_NewHeatingSystem).select('Propane', { force: true });
  cy.get(selectors.dropMenu_NewHeatingSystem).should('have.value', 'Propane');

  cy.get(selectors.dropMenu_AFUE2).select('70', { force: true });
  cy.get(selectors.dropMenu_AFUE2).should('have.value', '70');

})  
it('Step_ 1)', () =>{
  
  cy.get(selectors.dropMenu_State).select('Alberta', { force: true });
  cy.get(selectors.dropMenu_State).should('have.value', 'Alberta');

  cy.get(selectors.dropMenu_City).select('11', { force: true });
  cy.get(selectors.dropMenu_City).should('have.value', '11');

  cy.get(selectors.dropMenu_Stories).select('3', { force: true });
  cy.get(selectors.dropMenu_Stories).should('have.value', '3');

  cy.get(selectors.dropMenu_Square).select('5000', { force: true });
  cy.get(selectors.dropMenu_Square).should('have.value', '5000');
  
  cy.get(selectors.input_Years).clear().type('50');
  
  cy.wait(1000);
  cy.get('#VTES').should('not.have.text', '$0.00');
  cy.screenshot('Test_1_step_1');
})


});