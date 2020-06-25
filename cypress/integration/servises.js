/// <reference types="Cypress" />

describe('Visual Test for ServicesPage', function() 
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
