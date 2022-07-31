///<reference types="cypress" />

// here we see the Drag & Drop 

describe('verify the Drag and Drop functionality',function(){
    // it('TC01 To chheck the Iframe page ',()=>{
    //     cy.visit('http://www.webdriveruniversity.com/')
    //     cy.get('#iframe').invoke('removeAttr','target').click()
    //     cy.get('div#carousel-example-generic').find('.carousel-inner').find('div').find('img').each(function(el){
    //         if(el.text()==="../img/amp.svg"){
    //             cy.get('span[class="glyphicon glyphicon-chevron-left"]').click()
    //         }
    //     })
    // })
    
    // By on the action of mouse
    //mousedown
    //mousemove
    //mouseup

    it('verify the drag and drop functionality',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click()
        cy.url().should('contain','Actions')
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable').find('p').find('b').should('have.text','Dropped!')
    })

       // by the datatransfer

    it.only('verify the drag and drop functionality by datatransfer',()=>{
       let dataTransfer = new DataTransfer()
       cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
       cy.get('#menu-fried-chicken').trigger('dragstart',{dataTransfer})
       cy.get('#plate-items').trigger('drop',{dataTransfer})
       cy.get('#menu-fried-chicken').trigger('dragend',{dataTransfer})
       cy.get('#plate-fried-chicken').should('have.text','Fried Chicken')

       cy.get('#menu-hamburger').trigger('dragstart',{dataTransfer})
       cy.get('#plate-items').trigger('drop',{dataTransfer})
       cy.get('#menu-hamburger').trigger('dragend',{dataTransfer})
       cy.get('#plate-hamburger').should('have.text','Hamburger')

       cy.get('#menu-ice-cream').trigger('dragstart',{dataTransfer})
       cy.get('#plate-items').trigger('drop',{dataTransfer})
       cy.get('#menu-ice-cream').trigger('dragend',{dataTransfer})
       cy.get('#plate-ice-cream').should('have.text','Ice Cream')
    })
})       