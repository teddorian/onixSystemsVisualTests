/// <reference types="Cypress" />

describe('Visual Test for Contact Us Page, widths:828, 540, 1536, 1920', function() 
{

it('Loads the Contact Us page',function() {
    
    cy.visit('https://onix-systems.com/contact-us')
    cy.percySnapshot('Contact Us page loaded')
  
})
})