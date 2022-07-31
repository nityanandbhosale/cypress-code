///<referance types ="cypress" />


//verify the contact us with multiple data

describe('verify the contact us with different set of data', function () {

    it('verify the contact us eith multiple set of data', function () {
        cy.fixture('contactus_multiple').then(function (obj) {
            obj.forEach(data => {
                // cy.log(data)
                cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
                cy.get('input[name="first_name"]').type(data.firstName)
                cy.get('input[name="last_name"]').type(data.lastName)
                cy.get('input[name="email"]').type(data.email)
                cy.get('textarea[name="message"]').type(data.message)
                cy.get('input[value="SUBMIT"]').click()

            });
        })
    })
})