/// <reference types="Cypress" />

describe('Visual Test for Work Page, widths:828, 540, 1536, 1920', function() 
{

it('Loads the work page',function() {
    
    cy.visit('https://onix-systems.com/work')
    cy.percySnapshot('Work loaded')
  
})
})