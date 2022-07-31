///<reference types="cypress" />

// in this topic we are see the the how are the windowa alerts are working

describe('verify the different alerts of window',function(){


    beforeEach(function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })

    // verify the js alert

    it('verify the window js alert',function(){
        cy.on('window:alert',function(str){
            expect(str).to.eqls('I am a JS Alert')
        })

        cy.contains('Click for JS Alert').click()
        cy.get('[id="result"]').should('be.visible')
        .and('have.text','You successfully clicked an alert')

    })

    // verify the window confirm alert

    it('verify the window confirm alert for--OK',function(){
        cy.on('window:confirm',function(msg){
            expect(msg).to.eqls('I am a JS Confirm')
        })

        cy.contains('Click for JS Confirm').click()
        cy.get('[id="result"]').should('be.visible')
        .and('have.text','You clicked: Ok')
            return true
    })

    it('verify the window confirm alert for--Cancel',function(){
        cy.on('window:confirm',function(msg){
            expect(msg).to.eqls('I am a JS Confirm')
                return false
        })

        cy.contains('Click for JS Confirm').click()
        cy.get('[id="result"]').should('be.visible')
        .and('have.text','You clicked: Cancel')
    })

    // cheak the confirm alert by another method

    it('verify the confirm alert--OK by window method',function(){
        cy.window().then(function(metd){ Cancel
            cy.stub(metd,'confirm').returns(true)
        })

        cy.contains('Click for JS Confirm').click()
        cy.get('[id="result"]').should('be.visible')
        .and('have.text','You clicked: Ok')
        
    })

    it('verify the confirm alert--Cancel by window method',function(){
        cy.window().then(function(metd){
            cy.stub(metd,'confirm').returns(false)
        })
       
        cy.contains('Click for JS Confirm').click()
        cy.get('[id="result"]').should('be.visible')
        .and('have.text','You clicked: Cancel')
    })

    // cheak the promt alert

    it('verify the prompt alert function',function(){
        cy.window().then(function(msg){
            cy.stub(msg,'prompt').returns('Hello Nityanand')
        })

        cy.contains('Click for JS Prompt').click()
        cy.get('[id="result"]').should('be.visible')
        .and('have.text','You entered: Hello Nityanand')
    })

    // now for cheak for null
    it.only('verfy the prompt alert function',function(){
        cy.window().then(function(msg){
            cy.stub(msg,'prompt').returns(null)
        })

        cy.contains('Click for JS Prompt').click()
        cy.get('[id="result"]').should('be.visible')
        .and('have.text','You entered: null')
    })

})