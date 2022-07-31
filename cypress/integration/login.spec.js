describe('to cheak the login prosess',function(){
    it('to cheak login and password',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('#divUsername').type("Admin")
        cy.get('#divPassword').type('admin123')
        cy.get('#btnLogin').click()

    })

    it('to cheak for invalid creadential',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('#divUsername').type("Admin")
        cy.get('#divPassword').type("admin23")
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should('be visible')
    })
})