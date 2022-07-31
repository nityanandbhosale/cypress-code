// verify the drop down functionality


describe('verify the dropdown functionality',function(){

    it.only('to chek the dropdown functionality',function(){

        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

        // /// first selecting by the value
        // cy.get('#dropdowm-menu-1').select('c#')
        // cy.get('#dropdowm-menu-1').children().eq(1).should('have.value','c#')

        // // selecting by then text
        // cy.get('#dropdowm-menu-1').select('c#')
        // cy.get('#dropdowm-menu-1').children().eq(1).should('have.text','C#')

        let findoutvalues = ['C#','Maven','CSS']
        cy.get('.section-title').first().find('select').each(function(el,index){
            cy.wrap(el).select(findoutvalues[index]).should('contain',findoutvalues[index])
        })
        
    })

    // second tast case

    it('vrify the drop down functionality',function(){
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')

        // //first select by values
        // cy.get('#dropdowm-menu-1').select('c#')
        // cy.get('#dropdowm-menu-1').children().eq(1).should('have.value','c#')

        //select by text
        cy.get('#dropdowm-menu-1').select('C#')
        cy.get('#dropdowm-menu-1').children().eq(1).should('have.text','C#')

        //by selecting the values

        let values = ['c#','maven','css']
        cy.get('.section-title').first().find('select').each(function(el,index){
        cy.wrap(el).select(values[index]).should('have.value',values[index])
        })
    })

    // verify the drop down for the google

    it('verify the drop down for google',function(){

        cy.visit('https://www.google.com/')
        cy.get('[name="q"]').type('javascript')
        cy.get('[role="option"]').find('span').each(function(el){
            if(el.text().includes('javascript w3schools')){
              el.click()
            }

        })
        cy.url().should('contain','interview')
        
    })
})