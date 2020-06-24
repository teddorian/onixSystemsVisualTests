/// <reference types="Cypress" />

describe('Visual Test for HomePage', function() 
{

it('Open Home Page',function() {
    
    cy.visit('https://onix-systems.com/')
    cy.percySnapshot('HomeDowloaded')
  
})
})