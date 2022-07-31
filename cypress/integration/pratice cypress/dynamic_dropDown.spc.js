///<reference types="cypress" />

// **************** dynmic dropdowm ***************

describe('test',function(){
    
    it('',function(){
       cy.visit('https://www.amazon.in/')
       cy.get('#twotabsearchtextbox').type('iphone')
       cy.get('.autocomplete-results-container').find('.s-suggestion-container').each(function(el){
           cy.wrap(el).invoke('text').then(function(txt){
               cy.log(txt.trim())
               if(txt.trim()=="iphone 11 cover"){
                   cy.wrap(el).click({force:true})
               }
           })
       })
   })
})