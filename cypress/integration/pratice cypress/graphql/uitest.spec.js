/// <reference types="cypress" />

describe('verify the functionality', function () {
    it('verify the functionality to update toDO', function () {

        cy.intercept({
            method: "POST",
            url: "http://localhost:3000/"
        }).as("allTodo")

        cy.visit('http://localhost:1234/')
        cy.wait('@allTodo').then(function(res){
            if(res.response.body.data.allTodos[0].completed){
                cy.get('input[type="checkbox"]').first().click()
                        .should('not.be.checked') 
            }
            else {
                cy.get('input[type="checkbox"]').first().click()
                        .should('be.checked') 
            }
        })
    })

    it.only('verify the the other operation', function () {
        cy.intercept({
            method: "POST",
            url: "http://localhost:3000/",
            headers:{
                "x-gql-operation-name":"AddTodo" 
            }
        }).as("AddTodo")

        cy.intercept({
            method: "POST",
            url: "http://localhost:3000/",
            headers:{
                "x-gql-operation-name":"allTodos" 
            }
        }).as("allTodos")

        cy.visit('http://localhost:1234/')
        cy.get('.new-todo').type('hello333{enter}')
        cy.wait('@AddTodo')
        cy.wait('@allTodos')
        cy.get('.todo').last().find('label').should('have.text','hello333')


    })



})