///<reference types = 'cypress'/>

describe('verify the signUp fynctionality', () => {
    it('verify the valid signUp functionality', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#frame-one1434677811').then(function (frame) {
            // cy.log(frame)
            let body = frame.contents().find('body')
            cy.wrap(body).as('doc')

            cy.get('@doc').find('#q19 >div> h1').should('have.text', 'Volunteer Sign Up')

            cy.get('@doc').debug().find('#RESULT_TextField-1').type('Nityanand')
            cy.get('@doc').find('#RESULT_TextField-2').type('Bhosale')
            cy.get('@doc').find('#RESULT_TextField-3').type(7522957603)
            cy.get('@doc').find('#RESULT_TextField-4').type('India')
            cy.get('@doc').find('#RESULT_TextField-5').type('Pune')
            cy.get('@doc').find('#RESULT_TextField-6').type('Nityanand@2020gmail.com')
            // cy.get('#RESULT_RadioButton-7_0').check().should('be.checked')
            // cy.get('#RESULT_CheckBox-8_0').check().should('be.checked')
        })





        // cy.get('#RESULT_TextField-1').type('Nityanand')
    })
})