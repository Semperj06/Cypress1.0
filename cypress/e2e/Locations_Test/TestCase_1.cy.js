///<reference types="cypress" />
import selectors from '../../support/selectors.js'
import { data } from '../../fixtures/data.json'

cy.on('uncaught:exception', (err, runnable) => false);

//Test Case #1
describe('Saving calculators - locations test', () => {

  before(() => {
    cy.visit('/');
    cy.get(selectors.button_Calculator).click();

  })


  it('navigate to https://consumersenergymanagement.ca/savings-calculator/', () => {

    cy.url().should('eq', 'https://consumersenergymanagement.ca/savings-calculator/');
    cy.get(selectors.module_CalculatorBlock).should('be.visible');

  })


  const stateCityPairs = [
    { state: 'Alberta', city: '11' },
    { state: 'Manitoba', city: '11' },
    { state: 'Newfoundland', city: '11' },
    { state: 'NovaScotia', city: '11' },
    { state: 'NewBrunswick', city: '11' },
    { state: 'Ontario', city: '22' },
    { state: 'Quebec', city: '22' },
    { state: 'Saskatechewan', city: '11' },
    { state: 'British Columbia', city: '11' }
  ];
  stateCityPairs.forEach((pair, index) => {
    it(`Step_Seq ${index + 1}) Verify all the Canadian provinces are on the state list and 
        can be chosen "${pair.state}" each Canadian province has at least one city "${pair.city}"` , () => {

      cy.get(selectors.dropMenu_State).select(pair.state, { force: true });
      cy.get(selectors.dropMenu_State).should('have.value', pair.state);


      cy.get(selectors.dropMenu_City).select(pair.city, { force: true });

      cy.get(selectors.dropMenu_City).should('have.value', pair.city);

      cy.wait(1000);
      cy.screenshot(`Test_1_step_${index + 1}`);



    });
  });

});