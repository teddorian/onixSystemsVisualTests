/// <reference types="Cypress" />

describe('Visual Test for HomePage, widths:828, 540, 1920', function() 
{

it('Loads the homepage',function() {
    
    cy.visit('https://onix-systems.com/')
    cy.percySnapshot('Home loaded')
  
})
})