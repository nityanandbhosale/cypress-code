// types cypress


describe('tranverse method in cypress',function(){
    //<h1 id = "one" class = "two" name ="three">Heading</h1
    //element should be unique ===> ctrl + f  ====> search for element
    //id ==> cy.get('#one')
    //class===>cy.get('.two')
    //any attribute in cypress=====> cy.get('h1[name="three"]')
    // tagName===> cy.get('h1')
    //text =====> cy.contain('heading')

    // it('to get children of DoM elements,use the .children() command.',function(){
    //     cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    //     cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().should('have.length',3)
    // })

    // it('the first DOM element within elements,use the .children() command.',function(){
    //     cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().first().should('contain','Home')
    //     cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().first().should('have.text','Home')

    //     //'home'    ===>hom contin sunstring
    //     //      'home' have.text looks for exact value
    // })

    // it('to get the last element within elements, use the .last()command.',function(){
    //     cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().last().should('have.attr','class','breadcrumb-item active')
    // })

    // it('to get DOM element at a spefic index,use the .eq() command.',function(){
    //     cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().eq(0).should('contain','Home')
    //     cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().eq(1).should('contain','About Us')
    //     cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().eq(2).should('contain','Contact Us')
    // })

    // //sibling

    // it('to get the next sibling DOM element within elements,use the .next() command.',function(){
    //     cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    //     cy.get('ul[class="traversal-food-list"]').children().should('have.length',11)
    //     cy.get('#veggie').next().should('have.text','Asparagus')
    // })

    // it('to get the previous siblings DOM element within elements use, .prev() command.',function(){
    //     cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    //     cy.get('ul[class="traversal-food-list"]').children().should('have.length',11)
    //     cy.get('#veggie').prev().should('have.text','Figs')
    // })

    // it('to get all siblings DoM elements in element use .siblings() command.',function(){
    //     cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    //     cy.get('#veggie').siblings().should('have.length',10)
    // })

    // it('to get all of the next siblings elements within element use, .nextAll() command.',function(){
    //     cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    //     cy.get('#veggie').nextAll().should('have.length',4)
    // })

    // it('to get all of the prev siblings elements within elements use, .prevAll() command.',function(){
    //     cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    //     cy.get('#veggie').prevAll().should('have.length',6)
    // })

    // //previous until and next until

    // it('to get all prev siblings DOM elements within elemements until other element use, .prevUntil() command.',function(){
    //     cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    //     cy.get('#veggie').prevUntil('#fruits').should('have.length',5)
    // })
    
    // it('to get all next siblings of DOM element until other element use, .nextUntil() command.',function(){
    //     cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    //     cy.get('#fruits').nextUntil('#veggie').should('have.length',5)
    // })

    it('To remove DOM element(s) from the set of elements, use the .not() command.',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="radio"]').not('[disabled]').should('have.length',7)
    })

    it('To get DOM elements that match a specific selector, use the .filter() command.',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="radio"]').filter('[disabled]').should('have.attr','value','cabbage')
        
    })

    it('To get descendant DOM elements of the selector, use the .find() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ul[class="traversal-drinks-list"]').find('li[id="coffee"]').should('have.text','Coffee')
    })

    it('To get parent DOM element of elements, use the .parent() command',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').parent().should('have.attr','class','traversal-drinks-list')
    })

    it('To get parents DOM element of elements, use the .parents() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').parents().should('have.attr','class','traversal-drinks-list')
        cy.get('#milk').parents('div').should('have.attr','class','thumbnail')
        cy.get("#milk").parents('div').find('[class="col-sm-12"]')
        cy.get('#milk').parents('body')
    })

    // Another example of parents

    it('To get parents DOM element of elements, use the .parents() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id="fruits"]').parents().should('have.attr','class','traversal-food-list')
        cy.get('li[id="fruits"').parents('div').should('have.attr','class','thumbnail')
        cy.get('li[id="fruits"').parents('div').find('[class="col-sm-12"]')
        cy.get('li[id="fruits"').parents('body')
    })

    //-------closest type

    it('To get children of DOM elements, use the .children() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        //cy.get('#milk').closest('div').should('have.attr','class','thumbnail')
        //cy.get('#milk').closest('h2').should('have.text','Lists') 
    })

    
    it.only('To get parents DOM element of elements until other element, use the .parentsUntil() command.',function(){

        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').parentsUntil('div[class="col-sm-12"]').should('have.length',2)
    })
})