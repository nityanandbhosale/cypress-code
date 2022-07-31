
export class login {

    Visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    }

    Enter(username, password) {
        cy.get('#txtUsername').type(username)
        cy.get('#txtPassword').type(password)
        cy.get('#btnLogin').click()
        return this
    }

    wrongInfo() {
        cy.get('#spanMessage').should('have.text', 'Invalid credentials')
        return this
    }

    Ohrmllogo(){
        cy.get('#divLogo').should('be.visible')
        return this
    }

    forgotpassw(){
        cy.get('a[href="/index.php/auth/requestPasswordResetCode"]')
        .should('be.visible')
        .should('have.text','Forgot your password?')
        return this

    }


}