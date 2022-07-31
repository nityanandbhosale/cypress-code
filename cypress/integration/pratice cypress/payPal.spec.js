///<reference types="cypress" />
// by using the paypal access token and use it

describe('acess the paypal token',function(){

    it('first acess the token',function(){
        let token ;
        cy.request({
            method:"POST",
            url:"https://api-m.sandbox.paypal.com/v1/oauth2/token",
            headers:{
                Authorization:'Bearer A21AAJLPcvFnELsypwUvYYmU2s3vqzHFyZ5a7AiGhAEc1JeIlWArf3Dtma9GcrTR-kPfUdRq8Ho3u2O4jtRxOYoVEMJYmC45Q',
                content_Type:'application/x-www-form-urlencoded',
            },
            body:{
                grant_type:'client_credentials'
            },
            form:true
        }).then(function(response){
            // cy.log(response)
            expect(response.status).to.eqls(200)
            token = response.body.access_token
        }).then(function(){
            cy.log(token)

            cy.request({
                method:"GET",
                url:"https://api-m.sandbox.paypal.com/v1/invoicing/invoices?page=3&page_size=4&total_count_required=true ",
                headers:{
                    content_type:"application/json",
                    Authorization:`Bearer ${token}`
                }

            }).then(function(response){
                // cy.log(response)
                expect(response.status).to.eqls(200)
            })
        })
    })
})