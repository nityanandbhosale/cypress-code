///<reference types="cypress" />

import data from '../../fixtures/userApi.json'

describe('to creat the user by using the API post request',()=>{

    data.forEach(function(user,index){
        it(`to creat the user via API ${index+1}`,()=>{
            cy.request({
                method:"POST",
                url:"https://reqres.in/api/users",
                body:user
            }).then(function({status,body}){
                // cy.log(status)
                // cy.log(body)
                expect(status).to.eql(201)
                
                expect(body.index).not.be.eql(null)
                expect(body.name).to.eql(user.name)
                expect(body.job).to.eql(user.job)
                
            })
        })

    })

    
    
})