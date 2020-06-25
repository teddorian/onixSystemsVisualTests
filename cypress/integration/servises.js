/// <reference types="Cypress" />

describe('Visual Test for ServicesPage, widths:828, 540, 1920', function() 
{

it('Loads the ServicesOverview',function() {
    
    cy.visit('https://onix-systems.com/services')
    cy.percySnapshot('Services loaded')
  
})

it('Loads the Webdesign',function() {
    cy.visit('https://onix-systems.com/web-design-and-development')
    cy.percySnapshot('webdesign loaded')
})
})
