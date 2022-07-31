///<reference types="cypress" />

// ************* here we use of the calender can cheak the future date  *******************
describe('verify the datepicker functionaity',()=>{
    it('TS01 check the datepicker functionality',()=>{

        // let date = new Date()
        // cy.log(date.getMonth())
        // cy.log(date.getFullYear())
        // cy.log(date.getDate())
        // cy.log(date.getDay())

        // next 400 days in future date and months
        // 13 August 2013

        let day2 = new Date()
        day2.setDate(day2.getDate()+400)

        let year = day2.getFullYear()
        // cy.log(year)
        let date = day2.getDate()
        // cy.log(date)
        let wmonth = day2.toLocaleString('default',{month:'long'})
        // cy.log(months)
        // let smonth = day2.toLocaleString('default',{month:'short'})
        // cy.log(smonth)

        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()

        function setMonthYear(){
            cy.get('.datepicker-switch').first().then(function(el){
                if( ! el.text().includes(year)){
                    cy.get('.next').first().click()
                    setMonthYear()
                }

            }).then(function(){
                cy.get('.datepicker-switch').first().then(function(el){
                    if( ! el.text().includes(wmonth)){
                        cy.get('.next').first().click()
                        setMonthYear()
                    }
                })
            })

        }
        function futureDate(){
            cy.contains(date).click()
        }
        setMonthYear()
        futureDate()

        







    })
})