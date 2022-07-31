///<reference types="cypress" />



// ************** Shadow dom *******************

describe('to cheak the shadow dom functionality',()=>{
    it('verify the shadow dom functionality',()=>{
        cy.visit('http://127.0.0.1:5500/cypress/integration/pratice%20cypress/Shadow/index.html')
        cy.get('button').click()
        cy.get('#shadowHost').shadow().find('h2').should('have.text','I belong to Shadow DOM')
        cy.get('#shadowHost').shadow().find('input[name="name"]').type("Nityanand")
    })

    // on another example 
    it.only('TS02 verify the shadow dom functionality',()=>{
        cy.visit('https://books-pwakit.appspot.com/')
        cy.get('book-app').shadow()
        .find('app-toolbar')
        find('input').type('Hello')
        

       
    })
})