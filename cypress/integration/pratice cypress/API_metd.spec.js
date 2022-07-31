// to cheak the hit the varioud API request in cypress


 
describe('verify the API request functionality',function(){

    it('verify the GET API request',function(){
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then(function(response){
           // cy.log(response)
           expect(response.status).to.eqls(200)
        })

    })
    // for the Post rquest

    it('verify the post request',function(){

        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            body:{
                
                    "name": "morpheus",
                    "job": "leader"
                
            }
        }).then(function(response){
            //cy.log(response)
            expect(response.status).to.eqls(201)
        })
    })
    // for the PUT request 

    it('verify the PUT request',function(){
        cy.request({
            method:"PUT",
            url:'https://reqres.in/api/users/2',
            body:{
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(function(response){
            //cy.log(response)
            expect(response.status).to.eqls(200)
    
            })
    })
    // for pUT request api
    it('verify the PUT rquest api',function(){
        cy.request({
            method:"PUT",
            url:"https://reqres.in/api/users/2'",
            body:{
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(function({status,duration}){
            //cy.log(response)
            expect(status).to.eqls(200)
            expect(duration).to.be.lessThan(500)

        })
    })
    //for PUT request api
    it('verify the PUT request api',function(){
        cy.request({
            method:"PUT",
            url:"https://reqres.in/api/users/2'",
            body:{
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(function({body:{name}}){
           // cy.log(response)
           expect(name).to.eql('morpheus')
        })
    })
    // for the path

    it('verify the PATCH request',function(){
        cy.request({
            method:"PATCH",
            url:"https://reqres.in/api/users/2",
            body:{
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(function(response){
            //cy.log(response)
            expect(response.status).to.eqls(200)
        })
       
    })
    
        // for the DELETE

    it('verify the DELETE request',function(){
            cy.request({
                method:"DELETE",
                url:"https://reqres.in/api/users/2"
                
            }).then(function({status}){
                //cy.log(response)
                expect(status).to.eqls(204)
            })
    })
    
    // verify the api by authentication create user post

    it('verify the api with authentication create user POST',function(){
        cy.request({
            method:"POST",
            url: "https://gorest.co.in/public/v2/users",
            headers:{
                Authorization:"Bearer 97cccd91983fa66c4473b2ed6aa34abdee519fc793a7b01adcc04f6eadc2e2ef"
            },
            body:{
                "name":"Tenali Ramakrishna", 
                "gender":"male",
                //"email":`${math.random()*13}tenali.ramakrishna@15ce.com`,
                email:"bhosalenityanand6@gmail.com",
                "status":"active"
            }
            
        }).then(function(response){
            //  cy.log(response)
             expect(response.status).to.eql(201)
            })
    })

    
    // verify the api by authentication create user PATCH
    it('verify the api by authentication udate user PATCH',function(){
        cy.request({
            method:"PATCH",
            url:"https://gorest.co.in/public/v2/users/1",
            headers:{
                Authorization:"Bearer 97cccd91983fa66c4473b2ed6aa34abdee519fc793a7b01adcc04f6eadc2e2ef"
            },
            body:{
                 "name":"nityanand",
                  "email":"bhosale20@gmail.com",
                   "status":"active"
            }
        }).then(function(response){
            //cy.log(response)
            expect(response.status).to.eqls(200)
        })
    })

    //verify the api by authentication list user 
    it.only('verify the api by authentication list user by GET',function(){
        cy.request({
            method:"GET",
            url: "https://gorest.co.in/public/v2/users",
            headers:{
                Authorization:"Bearer 97cccd91983fa66c4473b2ed6aa34abdee519fc793a7b01adcc04f6eadc2e2ef"
            }
        }).then(function({status,duration}){
            //cy.log(response)
            expect(status).to.eqls(200)
            expect(duration).to.be.lessThan(200)
        })
    })
    
    //verify the api by authentication list user 
    it('//verify the api by authentication DELETE user ',function(){
        cy.request({
            method:"DELETE",
            url: "https://gorest.co.in/public/v2/users/17",
            headers:{
                Authorization:"Bearer 97cccd91983fa66c4473b2ed6aa34abdee519fc793a7b01adcc04f6eadc2e2ef"
            }

        }).then(function(response){
            //cy.log(response)
            expect(response.status).to.eqls(204)
        })

    })

    // creat the user by authentication

    it('verify the api by authentication PUT user',function(){
        cy.request({
            method:"PUT",
            url:"https://gorest.co.in/public/v2/users/17",
            headers:{
                Authorization:"Bearer 97cccd91983fa66c4473b2ed6aa34abdee519fc793a7b01adcc04f6eadc2e2ef"
            },
            body:{
                "name":"Allasani Peddana", 
                "email":"nityanand.peddana@15ce.com", 
                "status":"active"
            }

        }).then(function(response){
            cy.log(response)
        })
    })




 })

 //https://gorest.co.in/public/v2/users