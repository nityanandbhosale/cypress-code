/// <referance types ="cypress" />


// verify the radio button,cheakbox,dropdown,enable,disable functionality

describe('verify the radio button,cheakbox,dropdown,enable,disable functionality',function(){

    it('verify the radio buttion for cheak',function(){

        // check ()

         //cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        // cy.get('input[value="blue"]').check().should('be.checked')
        // cy.get('input[value="green"]').should('not.be.checked')

        // // click()

        // cy .get('input[value="blue"]').click().should('be.checked')
        // cy .get('input[value="green"]').should('not.be.checked')

        // we can also use the for loop for the table

        // cy.get('#radio-buttons').find('input').each(function(el){
        //    cy.wrap(el).check().should('be.checked') 
        // })

    
    })

    // check and uncheck methods

    it('verify the checkbox functionality',function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    //     cy.get('input[value="option-1"]').check().should('be.checked')
    //     cy.get('input[value="option-1"]').check().should('be.checked')
    //     cy.get('input[value="option-1"]').uncheck().should('not.be.checked')

    //    // using the click ()
    //     cy.get('input[value="option-3"]').click().should('not.be.checked')
    //     cy.get('input[value="option-3"]').click().should('be.checked')

        // chek all the checkbox via as arry as the parameter

        // cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4']).should('be.checked')
        // cy.get('input[type="checkbox"]').uncheck(['option-1','option-2','option-3','option-4']).should('not.be.checked')

        // now by using the for loop for the table

        cy.get('input[type="checkbox"').each(function(el){
            cy.wrap(el).check().should('be.checked')
            cy.wrap(el).uncheck().should('not.be.checked')
        })

    })


    
})