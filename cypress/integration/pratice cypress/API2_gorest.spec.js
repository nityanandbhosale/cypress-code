///<reference types="cypress" />

import info from '../../fixtures/api_users.json'


// cheak the different api request by the gorest

describe('to cheak the different api by gorest',function(){

    let token = "97cccd91983fa66c4473b2ed6aa34abdee519fc793a7b01adcc04f6eadc2e2ef"
    it('verify the GET request',function(){
        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/users",
            headers:{
                Authorization:`Bearer ${token}`
            }
            
        }).then(function(response){
            //cy.log(response)
            expect(response.status).to.to.eqls(200)
            expect(response.body.length).to.eqls(20)
            return response.body
        }).then(function(getusers){
           // cy.log(getusers)

           let find = getusers.filter(function(el){
               return el.email.includes("kiran_devar_iii@wisoky.net")
               
           })
           for(let keys in find[0]){
               cy.log(keys,find[0][keys])
           



               
           
           cy.log(find)
           expect(find[0]).to.have.all.keys('id','email','name','gender','status')
           }

           getusers.forEach(element => {
               expect(element).to.have.property('name')
               expect(element).to.have.property('id')
               expect(element).to.have.property('email')
               expect(element).to.have.property('gender')
               expect(element).to.have.property('status')
               
           });

        })
    })

    // verify post request
    it('verify the post api by gorest',function(){
        cy.request({
            method:"POST",
            url:"https://gorest.co.in/public/v2/users",
            headers:{
                Authorization:`Bearer ${token}`
            },
            body:{
                "name":"Tenali Ramakrishna", 
                "gender":"male",
                "email":`${(Math.random())*200000}tenali.ramakrishna@16ce.com`, 
                "status":"active"
            }

        }).then(function(response){
            //cy.log(response)
            expect(response.status).to.eqls(201)
            return response.body
        }).then(function(info){
            // cy.log(info)
            cy.log(info.id)
           cy.log(info.name).then(function(get){
            expect(get.name).to.eqls('Tenali Ramakrishna')
           })

        })
    })
    //import data from fixture and post api request
    info.forEach(function(payload){
        it('verift the POST api by inport data',function(){
            cy.request({
                method:"POST",
                url:"https://gorest.co.in/public/v2/users",
                headers:{
                    Authorization:`Bearer ${token}`
                },
                body:payload
            }).then(function(response){
                //cy.log(response)
                expect(response.status).to.eqls(201)
                expect(response.body).to.have.property('email')
            })
        })
    
    })
   

})