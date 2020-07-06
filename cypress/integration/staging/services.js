/// <reference types="Cypress" />

describe('Visual Test for Services Page, widths:828, 540, 1536, 1920', function() 
{

it('Loads the ServicesOverview',function() {
    
    cy.visit('http://staging.onix-systems.com/services')
    cy.percySnapshot('Services loaded')
  
})

it('Loads the Webdesign',function() {
    cy.visit('http://staging.onix-systems.com/web-design-and-development')
    cy.percySnapshot('webdesign loaded')
})

it('Loads the Android',function() {
    cy.visit('http://staging.onix-systems.com/android-application-development')
    cy.percySnapshot('Android loaded')
})

it('Loads the iosDevelopment',function() {
    cy.visit('http://staging.onix-systems.com/ios-development')
    cy.percySnapshot('ios-development loaded')
})

it('Loads the ui-ux-design-and-development',function() {
    cy.visit('http://staging.onix-systems.com/ui-ux-design-and-development')
    cy.percySnapshot('ui-ux-design-and-development loaded')
})

it('Loads the vr-ar development',function() {
    cy.visit('http://staging.onix-systems.com/vr-ar-virtual-reality-augmented-reality-development')
    cy.percySnapshot('vr-ar-development loaded')
})

it('Loads the iot development',function() {
    cy.visit('http://staging.onix-systems.com/iot-internet-of-things-development')
    cy.percySnapshot('iot-development loaded')
})
})