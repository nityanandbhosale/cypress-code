///<reference types="cypress" />


describe('visit to flipcart and  add the product to the cart',function(){
    it('verify the flipcart functionality',function(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('samsung s22 ultra')
        cy.get('[class="lrtEPN _17d0yO"]').find('span').each(function(el){
            let text =el.text()
            cy.log(text)
        })
        cy.get('.Y5N33s div div').each(function(el){
            let text =el.text()
            // cy.log(text)
            if(text.trim()=="samsung s22 ultra plus"){
                cy.wrap(el).click({force:true})
            }
        })

        cy.get('._25b18c').each(function(el){
            let price =el.text().replace('₹','').replace(',','').replace(',','')

             if(price == 131999){
                cy.wrap(el).should('be.visible')
             }
            
        })

        cy.get('._4rR01T').each(function(el){
            let text = el.text()
            // cy.log(text)
            if(text =="SAMSUNG Galaxy S22 Ultra 5G (Burgundy, 512 GB)"){
                cy.wrap(el).parents('[class="_1fQZEK"]').invoke('removeAttr','target').click()
            }
        })
    })
})