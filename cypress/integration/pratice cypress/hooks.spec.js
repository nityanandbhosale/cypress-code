//------------------ Mocha framework ---------------------



//------------------- Hooks conspect in cypress ------------

//1> before()
//2> beforeEach()
//3> it()
//4> afterEach()
//5> after()
 
// --------------- cheak it -----------------

describe('lets verify the function of hooks',function(){
    

  before(function(){
        cy.log('first run before (before everything) ')
    })

    beforeEach(function(){
        cy.log('beforeEach run before tastecase here')
    })

    it(' cheak the first run case first',function(){
        cy.log('Test case one')
    })

    it('this is the second case here',function(){
        cy.log('second test case')
    })

    afterEach(function(){
        cy.log('this is run after every test case')
    })

    after(function(){
        cy.log('this is run after completye test case')
    })


})