///<reference types="cypress" />


describe('verify the amazon search functionality', () => {
    

    // it('TC_01 verify the amazon search product functionality',()=>{
    //     cy.visit('https://www.amazon.com/')
    //     cy.get('#twotabsearchtextbox').type('iphone 13')
    //     cy.get('div[class="s-suggestion s-suggestion-ellipsis-direction"] >span').each(function(el){
    //         let text = el.text()
    //         cy.log(text)
    //         if(text== ' pro'){
    //             cy.wrap(el).click({force:true})
    //         }

    //     })
    //     cy.get('h2[class="a-size-mini a-spacing-none a-color-base s-line-clamp-2"] >a').find('span').each(function(el){
    //         let text = el.text()
    //         cy.log(text)

    //     })
    // })

    it('TC_01 verify the amazon search product functionality', () => {
        cy.visit('https://www.amazon.com/')
        cy.get('#twotabsearchtextbox').type('iphone')
        cy.get('.s-suggestion-container').find('div').each(function (el) {
            cy.wrap(el).invoke('text').then(function (txt) {
                if (txt.trim() == 'iphone 13 pro max') {
                    cy.wrap(el).click({ force: true })
                    return false
                }
            })
        })
        cy.get('h2[class="a-size-mini a-spacing-none a-color-base s-line-clamp-2"] >a').find('span').each(function (el) {
            let text = el.text()
            // cy.log(text)
            if (text=='Apple iPhone 13 (128GB) - Midnight'){
                cy.wait(8000)
                cy.wrap(el).click({ force: true })

            }
        })
        cy.get('span[class="a-offscreen"]').each(function(el){
            let prize = el.text()
            
        })
    })
})