///<reference types="cypress" />



//verify the GET api andi delete the anyone body object

let token ="97cccd91983fa66c4473b2ed6aa34abdee519fc793a7b01adcc04f6eadc2e2ef"

describe('verify the GET api andi delete the anyone body object',function(){

    it('verify the GET api',function(){
        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/users",
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then(function(response){
            // cy.log(response)
            expect(response.status).to.eqls(200)
            expect(response.body.length).to.eqls(20)
            expect(response.body[0]).to.have.property('id')
            return response.body[0].id
        }).then(function(id){
            // cy.log(id)
            cy.request({
                method:"DELETE",
                url:`https://gorest.co.in/public/v2/users/${id}`,
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }).then(function(response){
                // cy.log(response)
                expect(response.status).to.eqls(204)
            })
        })
    })
})