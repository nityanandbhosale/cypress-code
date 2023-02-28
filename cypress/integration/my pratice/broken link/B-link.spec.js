///<reference types = 'cypress'/>


// here we find the short list the brocken link on the page

describe('verify the brocken link on the page',function(){
    it('verify the all link',function(){
        cy.visit('https://www.kesari.in/')
        let arr = []
        cy.get('#main-menu >ul >li').find('a:first').each(function(el){
            let link = el.attr('href')
            arr.push(link)
            cy.log(arr)
        })
        .then(()=>{
            cy.get('#main-menu >ul >li').each(function(el,index){
                let text = el.find('a:first')
                if(text.attr('href').startsWith('/')){
                    cy.wrap(text).click({force:true})
                    cy.url().should('contain',arr[index])
                    cy.go('back')
                }
            })
        })

    })

    // by the second way

    // it('validate the link on the page',function(){
    //     let linkarry = ["/Group-Tours","/Speciality-Tours","/Speciality-Tours/Low-Price-Tours","/Tailor-Made","/www.kesarimice.in","/kesari-forex",
    //     "/visa","/cruises","/Deals","/About-Us","javascript:void(0)"]
    //     cy.visit('https://www.kesari.in/')
    //     cy.get('#main-menu >ul >li').each(function(el,index){
    //         let link = el.find('a:first')
    //         if(link.attr('href').startsWith('/')){
    //             cy.wrap(link).click()
    //             cy.url().should('contain',linkarry[index])
    //             cy.go(-1)
    //         }
    //     })
        
    // })

    // // by third way

    // it.only('validate brocken link',function(){
    //     cy.visit('https://www.kesari.in/')
    //     cy.get('.menu-item-has-children >a').each(function(el){
    //         let href = el.attr('href')
    //         if(!(href.includes("void(0)")))
    //         if(((el.prop("target")) != "_blank")){
    //             cy.visit(`https://www.kesari.in${href}`).then(()=>{
    //                 cy.url().should('contain',href)
    //             })
    //         }
    //         else{
    //             cy.log(href,'different base url')
    //         }
    //     })
    // })

})