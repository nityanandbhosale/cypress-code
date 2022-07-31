///<reference types="cypress" />

export class Resetpassw{

    forgoturl(){
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/requestPasswordResetCode')
    }

    ohrmllogo(){
        cy.get('#divLogo').should('be.visible')
    }

    resetof(username){

        cy.get('input[type="text"]').type(username)
        cy.get('#btnSearchValues').click()
        cy.get('.message').should('be.visible')
        //.should('have.text','Please contact HR admin in order to reset the password')

    }

    gobackward(){
        cy.get('#btnCancel').click()
        cy.url().should('contain','login')
    }



} 

