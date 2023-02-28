///<reference types = 'cypress'/>

describe('veriofy the dbug functionality',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    it('verify the stack stress debug',()=>{
        cy.visit('https://www.browserstack.com/')
        cy.get('#logo').should('be.visible')
    })

    it('check the other one functionality',()=>{
        cy.visit('https://www.browserstack.com/')
        cy.get('a[title="Sign In"]').then((selectedEl)=>{
        
            selectedEl.get(0).click()

            debugger ; 
        })
    })

    
})

