/// <reference types="Cypress" />

describe('Visual Test for HomePage', function() 
{

it('Loads the homepage',function() {
    
    cy.visit('https://onix-systems.com/')
    cy.percySnapshot('Home loaded')
  
})
})