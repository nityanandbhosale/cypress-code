///<reference types="cypress" />

// here use the three method to find the element
// 1> by jquery
// 2> java script
// 3> and also use the function

let bodyOfIframe = function(id){
    return cy.get(`#${id}`)
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
}


// ***************** by using the jquery ***************************

describe('vrify the active link using the Iframe by jquery',()=>{

    // it(' verify the Iframe functionality by jquery method',()=>{

    //     cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
    //     cy.get('#frame').then(function(iframe){
    //         let body =iframe.contents().find('body')
    //         cy.wrap(body).as('obj')
    //         cy.get('@obj').find("a[href='index.html']").parent().should('have.class','active')
    //     })
    // })

    // verify the active link by the java script

    it('verify the active link by the java script',()=>{

        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function(iframe){
            let body = iframe[0].contentDocument.body
            cy.wrap(body).as('obj')
            cy.get('@obj').find("a[href='index.html']").parent().should('have.class','active')
        })
    })

    it('verify the active link by java script',()=>{

        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        bodyOfIframe('frame').then(function(res){
            cy.wrap(res).as('obj')
            cy.get('@obj').find("a[href='index.html']").parent().should('have.class','active')
        })
    })


})