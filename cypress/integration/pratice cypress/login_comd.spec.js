//use the cypress command for avod repetation of code




//verify the login functionality

describe('verify the login functionality',function(){
    it('login functionality',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.singin('Admin','admin123')
        cy.get('#btnLogin').click()
        cy.get('h1')
        .should('be.visible')
        .should('have.text','Dashboard')

        
    })

    // cheaking for incorrect password

    it.only('login functionality',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.singin('Admin','admin23')
        cy.get('#btnLogin').click()
        cy.get('#spanMessage')
        .should('be.visible')
        .and('have.text','Invalid credentials')
    
    })

    /// verify the url

    it('verify the url of page',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.singin('Admin','admin123')
        cy.url().should('contain','dashboard')
    })

    // Title   orange HRM
    //getting by the javascript

    it.only('verify the title by using js',function(){
        cy .visit('https://opensource-demo.orangehrmlive.com/')
        cy .singin('Admin','admin123')

        cy.document().then(function(doc){
            expect(doc.title).to.equal('OrangeHRM')

        })

        // by cypress

        cy.title().then(function(str){
            expect(str).to.equal('OrangeHRM')
        })
    })

    
})
