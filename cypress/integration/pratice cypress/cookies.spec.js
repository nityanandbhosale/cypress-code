///<referance types ="cypress" />


//what is cookies
//ans-->Cookies are mainly used to manage user sessions, store user personalization preferences, and track user behavior


// to learn about the cookies

describe('handeling the cookies in cypress', function () {

    it.only('handling cookies in cypress', function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        //cy.visit("C:\Users\Sadanand%Bhosale\Desktop\cypress\cypress\integration\pratice cypress\index.html")
        cy.visit('http://127.0.0.1:5500/cypress/integration/pratice%20cypress/index.html')
        cy.setCookie('minskole', 'Qa Automation')
        cy.setCookie('minskole2', 'full stack devoper')
        cy.getCookie('minskole2').then(function (obj) {
            cy.log(obj.value)
        })
        // cy.getCookie('minskole').then(function(get){
        //      cy.log(get.value)
        // })

        // //now update or retrive the cookie
        cy.setCookie('minskole', 'python')

        // // now add the cookie
        cy.setCookie('minskole3', 'Qa Automation')

        // //now  clear the cookie

        cy.clearCookie('minskole2')
        cy.clearCookies()

        // cy.getCookie('minskole').then(function(str){
        //     cy.log(str.value)
        // })

        // // //clear all the cookie
        // // cy.clearCookie('minskole')
        // // cy.getCookie('minskole2').should('be.empty')


        // //_--------------Local Storage stup

        cy.window().then(function (win) {
            win.localStorage.setItem('Nityanand', 'hello nityanand')
        })

        cy.window().then(function (win) {
            let res = win.localStorage.getItem('Nityanand')
            cy.log(res)
        })

        cy.window().then(function (win) {
            win.localStorage.clear()

        })

        // cy.getLocalStorage('Nityanand')

        // if you have to clear local storage



        //cypress/integration/pratice%20cypress/index.html

    })
})