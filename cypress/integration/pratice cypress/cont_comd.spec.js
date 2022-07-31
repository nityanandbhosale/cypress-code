///--- To avoid the repetation of code use the command in cypress

//verify the contact method

describe('verify the contact us form along with navigation',()=>{

    it('verify the contact us form',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('.section_header').should('have.text','CONTACT US')
       
        cy.contactus12('Nityanand','bhosale','bhosalenityanand5@gmail.com','hello nityanand m learning js')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('contain','Thank You for your Message!')

    })

    //  cheak for reset

    it('verify the contact us form',function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('.section_header').should('have.text','CONTACT US')

        cy.contactus12('Nityanand','bhosale','bhosalenityanand5@gmail.com','hello nityanand m learning js')
        cy.get('input[value="RESET"]').click

        cy.get('input[name="first_name"]').should('have.text',"")
        cy.get('input[name="last_name"]').should('have.text',"")
        cy.get('input[name="email"]').should('have.text',"")
        cy.get('textarea[name="message"]').should('have.text',"")

    })

    //chek for the incorrect information

    it.only('verify the contact us form',function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('.section_header').should('have.text','CONTACT US')

        cy.contactus12('Nityanand','bhosale','bhosalenityanand5gmail.com','hello nityanand m learning js')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('html').should('contain','Invalid email address')
    
    })

    //for all fields are requried

    it.only('verify the contact us form',function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('.section_header').should('have.text','CONTACT US')
        
        cy.contactus12('nityanand','bhosale','bhosalenityanand5@gmail.com','{backspace}')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('html').should('contain','all fields are required')
    })


})