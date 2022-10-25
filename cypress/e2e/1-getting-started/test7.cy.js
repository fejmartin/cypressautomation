/// <reference types="Cypress" />


describe('My Third Test', () => {
    it('My Third test', () => {
      expect(true).to.equal(true)
  

      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      cy.get('#opentab').then(function(el)
      {
        const url=el.prop('href')
        cy.visit(url)
      }
      
      )

    })})