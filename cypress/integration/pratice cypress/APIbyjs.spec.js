describe('Different ways to use fixture file', function () {
    let data
    before(function() {                                                     //in before we use arrow function to change scope                                                             
        cy.fixture('contactus1').then((res) => {                       // of this  keyword 
            data = res

            //cy.log(data)
        })
    })
    it.only('TC-01 read fixture file in before', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(data.firstname)
        cy.get('input[name="last_name"]').type(data.lastname)
        cy.get('input[name="email"]').type(data.email)
        cy.get('textarea[name="message"]').type(data.message)
        cy.get('input[type="submit"]').click()

        cy.get('body').should('contain', ' Error: Invalid email address')

    })
})