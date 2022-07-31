

// now we cheaking the intercept call functionality
///<reference types="cypress" />
describe('cheak the intercept call functionality',()=>{

    it('verify the call intercept functionality',function(){

        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
        cy.get('.network-comment').should('contain','laudantium')
    })

    it('verify the getcomment functionality',function(){
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function(rs){
            return rs.response.body.body
            
        }).then(function(comment){
            cy.get('.network-comment').should('have.text',comment)
        })
    })

    // now cheak the post comment method
    it('verify the post comment by intercept',function(){

        cy.intercept({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments"
        }).as('postComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        //cy.wait('@postComment').its('response.statusCode').should('be.oneOf',[200,201])
        cy.wait('@postComment').then(function({request,response}){
            // cy.log(request)
            // cy.log(response)
            expect(request.method).to.eqls('POST')
            expect(response.statusCode).to.eqls(201)
            //cy.log(response.body)
            //expect(response.body).to.have.keys(['name','id','email','body'])

            //suppose have to find the keys and values of object
            let keyValue = response.body
            for(let key in keyValue){
                cy.log(key,keyValue[key])
            }

        })

        cy.get('.network-post-comment').should('be.visible')
        cy.get('.network-post-comment').should('have.text','POST successful!')
       
    })

    // now cheak the put comment by cy intercept

    it('verify the PUT comment by cy intercept',function(){

        cy.intercept({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('putComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-put').click()
        cy.wait('@putComment').then(function({request,response}){
            // cy.log(response)
            // cy.log(request)
            expect(response.statusCode).to.eqls(200)
            expect(response.statusMessage).to.eqls('OK')

            //cy.log(response.body)
            expect(response.body).to.have.keys(['name','id','email','body'])

            let obj = response.body
            for(let key in obj){
                cy.log(key,obj[key])
            }
        })
    })

    // what is stubbing the data
    //====> What is stubbing in Cypress?
        // A stub is a way to modify a function and delegate control over its behavior
        // to you (the programmer). A stub is most commonly used in a unit test but is
        //  still useful during some integration/e2e tests. // create a standalone stub (generally for use in unit test) cy.
    

        it.only('verift the getcomment functionality by stubbing',function(){

            cy.intercept({
                method:"GET",
                url:"https://jsonplaceholder.cypress.io/comments/1"
            },{
                    statusCode:404,

                body:{
                        "postId": 1,
                        "id": 1,
                        "name": "Nityanand bhosale",
                        "email": "Eliseo@gardner.biz",
                        "body": "hello i m stubbing data",
                        "langauge":"Marathi"
                     }



            }
            ).as('getcomment')

            cy.visit('https://example.cypress.io/commands/network-requests')
            cy.get('.network-btn').click()
            cy.wait('@getcomment').then(function({response,request}){
                // cy.log(response)
                // cy.log(request)

                expect(response.body.name).to.eqls("Nityanand bhosale")

                let info = response.body
                for(let key in info){
                    cy.log(key,info[key])
                }

            })
        })
})