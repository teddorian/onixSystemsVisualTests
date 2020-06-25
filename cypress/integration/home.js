/// <reference types="Cypress" />

describe('Visual Test for HomePage, widths:828, 540, 1536, 1920', function() 
{

it('Loads the Home page',function() {
    
    cy.visit('https://onix-systems.com/')
    cy.percySnapshot('Home page loaded')
  
})
})