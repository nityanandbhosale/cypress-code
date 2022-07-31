///referance types ==== "cypress"



//verify the contact method

describe('verify the contact us form alon with navigation',function(){

    it('verify the contact us form',function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('.section_header').should('have.text','CONTACT US')
        cy.get('.section_header').invoke('text').then(function(str){
            expect(str).to.eql('CONTACT US')
        })

        //for verify enter correct info

        cy.get('input[name="first_name"]').type('Nityanand')
        cy.get('input[name="last_name"]').type('Bhosale')
        cy.get('input[name="email"]').type('bhosalenityanand5@gmail.com')
        cy.get('textarea[name="message"]').type('Hello m nityanand m learning js')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })

    ///cheak for the reset

    it('verify the contact us form',function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('.section_header').should('have.text','CONTACT US')
        cy.get('.section_header').invoke('text').then(function(str){
            expect(str).to.eql('CONTACT US')
        })

        //reset

        cy.get('input[name="first_name"]').type('Nityanand')
        cy.get('input[name="last_name"]').type('Bhosale')
        cy.get('input[name="email"]').type('bhosalenityanand5@gmail.com')
        cy.get('textarea[name="message"]').type('Hello m nityanand m learning js')
        cy.get('input[value="RESET"]').click

        cy.get('input[name="first_name"]').should('have.text',"")
        cy.get('input[name="last_name"]').should('have.text',"")
        cy.get('input[name="email"]').should('have.text',"")
        cy.get('textarea[name="message"]').should('have.text',"")
    })

    it('verify the contact us form',function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('.section_header').should('have.text',"CONTACT US")
        cy.get('.section_header').invoke('text').then(function(str){
            expect(str).to.eql('CONTACT US')
        })

        //verify for invalid mail

        cy.get('input[name="first_name"]').type('Nityanand')
        cy.get('input[name="last_name"]').type('Bhosale')
        cy.get('input[name="email"]').type('bhosalenityanand5gmail.com')
        cy.get('textarea[name="message"]').type('Hello m nityanand m learning js')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('html').should('contain','Invalid email address')

    })

    it.only('verify the contact us form',function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('.section_header').should('have.text',"CONTACT US")
        cy.get('.section_header').invoke('text').then(function(str){
            expect(str).to.eql('CONTACT US')
        })
         
        
        //for check all fields reduired

        cy.get('input[name="first_name"]').type('Nityanand')
        cy.get('input[name="last_name"]').type('Bhosale')
        cy.get('input[name="email"]').type('bhosalenityanand5gmail.com')
        cy.get('input[value="SUBMIT"]').click()
        cy.get('html').should('contain','all fields are required')

    })



    

    
})
