
describe('verify the medication process', () => {

    it('verify the medication process', () => {

        cy.visit('https://demoedh.nuvento.com/login')
        cy.get('#username').type('testuserdemo@nuvento.com')
        cy.get('#password').type('Admin@1234')
        cy.get('button[type="submit"]').click()
        cy.wait(3000)
        // cy.intercept({
        //     method: 'POST',
        //     url: 'https://demoedhapi.nuvento.com/v3/student/student-information'

        // }).as('info')

        cy.get('#st_number').type('7890456')
        cy.get('button#serch').first().click()
        cy.wait('@info')

        // cy.intercept({
        //     method:"POST",
        //     url:"https://demoedh.nuvento.com/edu-health/student-profile/61d2edfefbb51d00305e43b4/?tab=healthDetailTab"
        // })

        // cy.contains('+ Add New Visit').click()
        // cy.get('#st_number').type(7890456)
        // cy.get('#s_choolname').find('option').eq(1).click({force:true})
        // cy.get('#g_rade').find('option').click({force:true})
        // cy.get('#stud_fname').type('Alice')
        // cy.get('#l_name').type('Thomas')

        // cy.get('#studentId').type('Allergy')
        // cy.get('.complication-list').children().find('p').should('have.text','Allergy').click()
        // cy.get('#initialpresentation').eq(0).click()
        // cy.get('input[name="vitalInformation"]').click()
        // cy.get('input[class="form-control mr-0"]').eq(0).type(80)
        // cy.get('input[class="form-control mr-0"]').eq(1).type(37)
        // cy.get('input[class="form-control mr-0"]').eq(2).type(65)
        // cy.get('input[class="form-control mr-0"]').eq(3).type(60)
        // cy.get('input[class="form-control mr-0"]').eq(4).type(90)

        // cy.get('input[class="p-0-contact"]').first().click()
        // // cy.get('input[id="normalRadio"]').click()
        // cy.get('textarea').type('Good condition')
        // cy.get('label[for="SentvisitOutcome"]').click()
        // cy.get('input[name="No Symptoms"]').click()
        // cy.get('input[name="Monitor student"]').click()
        // cy.get('input[name="Dust"]').click()
        // cy.get('.form-footer').last().find('button').click({multiple: true})


       
        


    })
    // 
            //Alice 

   
})