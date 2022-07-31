///<reference types="cypress" />

//post the user and and updat5e it by  its  id

let token ='97cccd91983fa66c4473b2ed6aa34abdee519fc793a7b01adcc04f6eadc2e2ef'

describe('verify thr gorest api',function(){

    it('verify the gorest post api',function(){

        cy.request({
            method:"POST",
            url:"https://gorest.co.in/public/v2/users",
            headers:{
                Authorization:`Bearer ${token}`
            },
            body:{
                "name":"Tenali Ramakrishna", 
                "gender":"male",
                "email":`tenali.ramakrishna@5ram.com${Math.floor(Math.random ()*20000)}`,
                "status":"active"
            }
        }).then(function({status,body}){
            //cy.log(response)
            expect(status).to.eqls(201)
            expect(body).to.have.property('id')
            return body.id
        }).then(function(id){
            cy.log(id)

            //update user of same id
            
            cy.request({
                method:"PATCH",
                url:`https://gorest.co.in/public/v2/users/${id}`,
                headers:{
                    Authorization:`Bearer ${token}`
                },
                body:{
                    "name":"nityanand bhosale", 
                    "gender":"male",
                    "email":`tenali.ramakrishna@5ram.com${Math.floor(Math.random ()*20000)}`,
                    "status":"active"
                }

            }).then(function({status,body}){
                // cy.log(response)
                expect(status).to.eqls(200)
                expect(body.name).to.eqls('nityanand bhosale')

                for(let key in body){
                    cy.log(key,body[key])
                }
            })
        })
    })
    
})