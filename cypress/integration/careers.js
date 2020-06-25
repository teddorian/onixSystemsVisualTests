/// <reference types="Cypress" />

describe('Visual Test for Careers Page, widths:828, 540, 1536, 1920', function() 
{

it('Loads the Careers page',function() {
    
    cy.visit('https://onix-systems.com/careers')
    cy.percySnapshot('Careers loaded')
  
})
})