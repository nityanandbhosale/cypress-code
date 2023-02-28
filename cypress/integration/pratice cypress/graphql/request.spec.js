///<reference types="cypress" />

describe('', () => {
    it('verify the all graphql all the request', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:1234/'

        }).then(function (res) {
            // cy.log(res)
            expect(res.status).to.eql(200)
        })
    })

    // now check the post request
    it('verify the  graphql post request', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/',
            body: {
                operationName: 'allTodos',
                query: `
                query allTodos {
                    allTodos {
                      id
                      title
                      completed
                      __typename
                    }
                  }
                `,
                variables: {}
            },

        }).then(function (res) {
            cy.log(res)
            // expect(res.status).to.eql(200)
        })
    })

    it('verify the  graphql post request', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/',
            body: {
                operationName: "AddTodo",
                query: `mutation AddTodo($title: String!) {
                    createTodo(title: $title, completed: false) {
                      id
                      __typename
                    }
                  }`,
                variables: {
                    "title": "cypress"
                }
            }

        }).then(function (res) {
            cy.log(res)
            // expect(res.status).to.eql(200)
        })
    })

    it('UpdateToDo', function () {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/",
            body: {
                operationName: 'allTodos',
                query: `query allTodos {
                    allTodos {
                      id
                      title
                      completed
                      __typename
                    }
                  }`,
                variables: {}
            }

        }).then(function (res) {
            // expect(res.status).to.eq(200)
            let id = res.body.data.allTodos[0].id
            cy.log(id)
            // return id
        }).then(function (id) {
            cy.request({

                method: "POST",
                url: "http://localhost:3000/",
                body: {
                    operationName: 'updateTodo',
                    query: `mutation updateTodo($id: ID!, $completed: Boolean!) {
                        updateTodo(id: $id, completed: $completed) {
                          id
                          title
                          completed
                          __typename
                        }
                      }`,
                    variables: {
                        "id": `${id}`,
                        "completed": true
                    }
                }

            }).then(function (res) {
                cy.log(res)
            })

        })



    })

    it.only('deleteTodo', function () {

        cy.request({
            method: "POST",
            url: "http://localhost:3000/",
            body: {
                operationName: 'allTodos',
                query: `query allTodos {
                    allTodos {
                      id
                      title
                      completed
                      __typename
                    }
                  }`,
                variables: {}
            }

        }).then(function (res) {
            expect(res.status).to.eq(200)
            let id = res.body.data.allTodos[0].id
            cy.log(id)
            // return id
        }).then(function (id) {

            cy.request({
                method: "POST",
                url: "http://localhost:3000/",
                body: {
                    operationName: 'DeleteTodo',
                    query: `mutation DeleteTodo($id: ID!) {
                        removeTodo(id: $id) {
                          id
                          __typename
                        }
                      }`,
                    variables: {
                        "id": `${id}`
                    }
                }

            }).then(function(response){
                expect(response.status).to.eq(200)
            })

        })



    })


})