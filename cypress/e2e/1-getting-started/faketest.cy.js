   <reference types="Cypress" />

   describe('My fist Test suite', function()
{
    
    it('My firstTest case', function() {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        cy.intercept( {
            method : 'GET',
            url : 'http://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        {
            statusCode : 200,
            body : [
                {
                    "book_name": "RestAssured with Java?",
                    "isbn": "RSU",
                    "aisle": "2301"
                }
            ]
        })
        .as('bookretrivevals')
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@bookretrievals').should(({request,response}) =>
        {
            cy.get('tr').should('have.length',response.body.length+1)
            response.body.length
        }
        )
        cy.get('p').should('have.text','Sorry we have only one book available')

        //length of the response array= rows of the table 



    })
})