/// <reference types="Cypress" />

describe('Visual Test for about-ukraine Page, widths:828, 540, 1536, 1920', function() 
{

it('Loads the about-ukraine page',function() {
    
    cy.visit('https://onix-systems.com/about-ukraine')
    cy.percySnapshot('about-ukraine loaded')
  
})
})