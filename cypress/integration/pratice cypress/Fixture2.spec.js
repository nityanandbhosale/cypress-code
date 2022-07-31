///<referance types ="cypress" />
// --------------- Test cases --------------

// cheak the test cases by using the data import

describe('vrify the contact us form of code',function(){

    let info ;

    before(function(){

        cy.fixture('contactus2').then((data)=>{
            info = data
        })
    })

    // now retrive the values of object by dot notation and bracket notation

    it('Test case one to retrive the values of data',function(){
        // cy.log(info)
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(info[0].firstname)
        cy.get('input[name="last_name"]').type(info[0].lastname)
        cy.get('input[name="email"]').type(info[0].email)
        cy.get('textarea[name="message"]').type(info[0].message)
        cy.get('input[value="SUBMIT"]').click()

    })

    it('Test Case two for retrive the values of object',function(){
        // cy.log(info)
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(info[1].firstname)
        cy.get('input[name="last_name"]').type(info[1].lastname)
        cy.get('input[name="email"]').type(info[1].email)
        cy.get('textarea[name="message"]').type(info[1].message)
        cy.get('input[value="SUBMIT"]').click()

    })

    it('Test Case third for retrivr the values if object',function(){
        // cy.log(info)
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // cy.xpath('//*[@id="contact_form"]/input[1]').type(info[1].firstname)
        cy.get('input[name="last_name"]').type(info[1].lastname)
        cy.get('input[name="email"]').type(info[1].email)
        cy.get('textarea[name="message"]').type(info[1].message)
        cy.get('input[value="SUBMIT"]').click()
    })
})