/// <reference types="Cypress" />


describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)


    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
// Parent child chaining
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length',4)
    cy.get(':nth-child(3) > .product-action > button').click()
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(function()
    {
    console.log('sf')
  })

  
    cy.get('.products').find('.product').each(($el, index, $list)  =>{
    
      const textVeg=$el.find('h4.product-name').text()
      if(textVeg.includes('Cashews'))
      $el.find('button').click()
  })
  //ASSERT IF LOGO TEXT IS CORRECTLY DISPLAYED
  cy.get('.brand.greenLogo').should('have.text','GREENKART')

//this is to print in logs
cy.get('.brand.greenLogo').then(function(logoelement)
{
  cy.log(logoelement.text());
})





},);})

