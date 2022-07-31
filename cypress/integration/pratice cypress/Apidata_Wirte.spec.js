///<reference types="cypress" />

// here we  write the new fixture file from get data from Api response

describe('To Write the fixture file from API response',()=>{
    it('TC01 write fixture file',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then(function(info){
            cy.log(info)

            cy.writeFile('cypress/fixtures/response_Api.json',info.body)
        })

        cy.fixture('response_Api').then(function(resp){
            expect(resp.data.length).to.eql(6)

            let keys = resp.data
            keys.forEach((obj) => {
                expect(obj).to.have.keys(['id','email','first_name','last_name','avatar'])
            });
        })
    })
})