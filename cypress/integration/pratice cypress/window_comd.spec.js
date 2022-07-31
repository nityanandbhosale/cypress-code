///<referance types ="cypress" />



// window commands of java script and cypress

describe('verify the window command in cypress',function(){

    it('verify the window command for reaload,forward,back via javascript',function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.singin('Admin','admin123')
        // cy.window().then(function(win){
        //     win.location.reload()
        // })

        //for the go forward

        cy.window().then(function(win){
            win.history.forward()
        
        })

        cy.window().then(function(win){
            win.history.back()
        })
        cy.window().then(function(win){
            expect(win.location.href).to.eql('https://opensource-demo.orangehrmlive.com/index.php/dashboard')
        })

    })

    it.only('verify the window command for reaload,forward,back via cypress',function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.singin('Admin','admin123')
        cy.reload()
        cy.go(1)
        cy.go(-1)
        cy.url().should('contain','dashboard')
        
    })
})