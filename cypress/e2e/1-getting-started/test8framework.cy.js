/// <reference types="Cypress" />

import HomePage from '../PageObjects/HomePage.js'
import ProductPage from '../PageObjects/ProductPage.js'

describe('My fist Test suite', function()
{
    before(function() {
        //runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
 this.data=data
        })

    })
    it('My firstTest case', function() {
        const homePage=new HomePage()
        const productPage=new ProductPage()

   
    cy.visit('https://rahulshettyacademy.com/angularpractice/')

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEntrepreneaur().should('be.disabled')
        homePage.getShopTab().click()


        this.data.productName.forEach(function(element) {
            
            cy.selectProduct(element)
        });
        productPage.checkOutButton().click()
        var sum=0

        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

            const amount=$el.text()
            var res= amount.split(" ")
            res= res[1].trim()
            sum=sum+Number(sum)+Number(res)

         }) .then(function()
         {
            cy.log(sum)
         })
         cy.get('h3 strong').then(function(element)
         {
            const amount=element.text()
            var res= amount.split(" ")
            var total= res[1].trim()
            expect(Number(total)).to.equal(115000)

         }
         )
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force: true})
        cy.get('input[type="submit"]').click()
        //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-)')
    
        
        
        })

    })
