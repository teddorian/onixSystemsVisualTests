/// <reference types="Cypress" />

describe('Visual Test for Story Page, widths:828, 540, 1536, 1920', function() 
{

it('Loads the Story page',function() {
    
    cy.visit('https://onix-systems.com/the-onix-story')
    cy.percySnapshot('Story page loaded')
  
})
})