///<reference types="cypress" />

describe('vrify the request data',function(){

    it('vrify the user data as per api',function(){

        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.typicode.com/posts"
        }).as('getcomment')

        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.get('a[href="/posts"]').first().click()
        cy.wait('@getcomment').then(function({request,response}){
            // cy.log(response)
            expect(response.statusCode).to.eqls(200)
            expect(response.body).to.have.length(100)
        })
    })

    // it verify the api request and stubbimg data into it
    it.only('verify the get api request',function(){
        cy.intercept({
            method:'GET',
            url:"https://jsonplaceholder.typicode.com/posts"
        },{
            firstName:"Nityanand",
            lastName:"Bhosale"

        }).as('getdata')

        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.get('a[href="/posts"]').first().click()
        cy.wait('@getdata').then(function(response){
            
        })
    })
})