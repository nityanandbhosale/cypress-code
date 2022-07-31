///<referance types ="cypress" />



// There are vairous way to switch tabs in cytpress tools

//remove attr---> Since cypress doesn’t allow the opening of a new browser tab, the workaround in such cases is to remove the attribute – target=’_blank’.
// Now when we click the ‘Click Here’ button, instead of a new tab, the webpage is opened in the current tab.

describe('to switch the tabs by the various ways',function(){
    it('handling the tab by using the remove attr',function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.url().should('contain','Contact-Us')

    })

    //updating the attribute
    it('to update the attribute by handling the tab switch',function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('attr','target','_self').click()
        cy.url().should('contain','Contact-Us')

    })

    // Retriving the href attribute value appending with the base url

    it('to update url by handling the switch tab',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('attr','href').then(function(resource){
            cy.log(resource)
            cy.visit(`https://webdriveruniversity.com/${resource}`)
        })
        cy.url().should('contain','Contact-Us')
    })



})