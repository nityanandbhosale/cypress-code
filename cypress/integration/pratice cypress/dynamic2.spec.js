///<reference types="cypress" />

// *********** dynamic dropdown ****************

describe('verify thr Amazon url with dynamic dropdown',()=>{
    it('verify the dynamic dropdown',()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('samsung s22')
        cy.get('.autocomplete-results-container').find('.s-suggestion-container').each(function(el){
            cy.wrap(el).invoke('text').then(function(str){
                cy.log(str.trim())
                if(str.trim() == "samsung s22 ultra 5g"){
                    cy.wrap(el).click({force:true})
                }
                    
            })
        })
    })
})