///<referance types ="cypress" />

//verify the functionality by using the beforeEach
import info from '../../fixtures/contactus2.json'

describe('verify the functionality for contact us ',function(){

    beforeEach(function(){
        cy.fixture('contactus2').then((info)=>{
            this.info = info
        })
    })
     it('verify the contactus process by functionality',function(){
         cy.log(this.info.firstname)
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(this.info[0].firstname)
        cy.get('input[name="last_name"]').type(this.info[0].lastname)
        cy.get('input[name="email"]').type(this.info[0].email)
        cy.get('textarea[name="message"]').type(this.info[0].message)
        cy.get('input[value="SUBMIT"]').click()
     })

     it('verify the contactus process by functionality',function(){
        cy.log(this.info.firstname)
       cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
       cy.get('input[name="first_name"]').type(this.info[1].firstname)
       cy.get('input[name="last_name"]').type(this.info[1].lastname)
       cy.get('input[name="email"]').type(this.info[1].email)
       cy.get('textarea[name="message"]').type(this.info[1].message)
       cy.get('input[value="SUBMIT"]').click()
     })

     
})