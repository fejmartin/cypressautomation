<reference types="Cypress" />

describe('My fist Test suite', function()
{
 
 it('My firstTest case', function() {

     cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
     cy.intercept('GET','http://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'),
     (req) =>
 {
     req.url="http://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"

     req.continue((res) => 
     {
        expect(res.statusCode).to.equal(403);
    })
 }
cy.as("dummyUrl")

cy.get("button[class='btn btn-primary']").click()
cy.wait('dummyUrl')
})})