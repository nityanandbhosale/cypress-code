///<referance types ="cypress" />D

// cheak the how synchronus & asynchronus work in cypress

describe('verify the syn & asyn process excuted in cypress',function(){

    it(' first verify the synchronus functionality',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="contactme"]').should('have.text','CONTACT US')
        console.log('Hello nityanand')
    })

    //verify the syn functionality
    it('verify the syn functionality',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="contactme"]')
        .should('have.text','CONTACT US')
        .then(function(){
            console.log('Hello nityanand')
        })
    })

    it('verify the syn functionality',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="contactme"]')
        .should('have.text','CONTACT US')
        cy.log('Hellow')

    })

    // Now verify the element by the implicit asseration
    it('Now verify the element by the explicit asseration',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="contactme"]')
        .should('have.text','CONTACT US')
        cy.log('hello nityanand')
    })
    
    //Now verify the element by the implicit asseration
    it('Now verify the element by the explicit asseration',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="contactme"]')
        .should('have.text','CONTACT US').then(function(str){
            expect(str.text()).to.eql('CONTACT US')
        })
    })


    // Implicit assertion -----> Using .should() or .and() commands is the preferred way of making assertions
    // in Cypress. These are typical Cypress commands, which means they apply to the currently yielded subject 
    //in the command chain.
    //You can chain multiple assertions together using .and(), which is another name for .should() 
    //that makes things more readable:
    //y.get('#header a')
  //.should('have.class', 'active')
  //.and('have.attr', 'href', '/users')


  // Explicit assertion ---> an assertion is applicable to an object directly, it is known as the explicit assertion.
  // The popular explicit assertions include assert/expect.

})