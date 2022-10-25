/// <reference types="Cypress" />


describe('My Third Test', () => {
    it('My Third test', () => {
      expect(true).to.equal(true)
  

      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      //cy.get('div.mouse-hover-content').invoke('show')
      cy.contains('Top').click({force: true})
      cy.url().should('include','top')




    
    })})