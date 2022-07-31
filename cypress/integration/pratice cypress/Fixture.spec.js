///<referance types ="cypress" />
//------------- Testcases -----------


describe('to verify the contactus process',function(){

    let inform = {
        firstName:"nityanand",
        lastName:"bhosale",
        email:"bhosalenityanand5@gmail.com",
        message:"hi m leqarning js"
    }

    //from this object retrive the value by dot notation and bracket notation

    it('Test Case one to Test the object data',function(){

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.co
        // cy.get('input[name="first_name"]').type('nityanand')
        // cy.get('input[name="last_name"]').type('bhosale')
        // cy.get('input[name="email"]').type('bhosalenityanand5@gmail.com')
        // cy.get('textarea[name="message"]').type('hi m learning js')
        // cy.get('input[value="SUBMIT"]').click()
    })

    //now retrive the values
    it('Test case Secod for retrive the values of object',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(inform.firstName)
        cy.get('input[name="last_name"]').type(inform['lastName'])
        cy.get('input[name="email"]').type(inform.email)
        cy.get('textarea[name="message"]').type(inform['message'])
        cy.get('input[value="SUBMIT"]').click()
    })

    // ------------ Here Using The Fixture method -----------------

    it.only('Test Case third to test the object data by fixture methosd',function(){

        cy.fixture('contactus').then(function(inform){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(inform.firstName)
        cy.get('input[name="last_name"]').type(inform['lastName'])
        cy.get('input[name="email"]').type(inform.email)
        cy.get('textarea[name="message"]').type(inform['message'])
        cy.get('input[value="SUBMIT"]').click()
        })
    })
})