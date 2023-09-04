import selectors from './selectors'
import { data } from '../fixtures/data.json'


Cypress.Commands.add('loginAndNavigateToMainMenu', () => {
    cy.visit('/');
    cy.get(selectors.module_LogIn).should('be.visible');
  
    cy.get(selectors.inputField_Username).type(data[2].username);
    cy.get(selectors.inputField_Password).type(data[2].password);
    cy.get(selectors.button_LogIn).click();
  
    cy.get(selectors.module_mainMenuBlock).should('be.visible');
  });
  
  
  
  
  
  