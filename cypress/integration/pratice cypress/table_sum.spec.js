// <referance types ="cypress" />
// cheak the table functionality and sum of the ages



describe(' cheak the table functionality and its sum',function(){

    it('to verify the table functionality and sum the table',function(){

        // let sum = 0
        // cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        // cy.get('#t01').find('tr').each(function(el,index,arr){
        //     if(index != 0){
        //         //cy .log(el.find('td').last().text())   // here it will gives the number but which is in string
        //          //so that conver it into the number and sum the numbers
        //          sum = sum +  Number(el.find('td').last().text())
        //     }
        // }).then(function(){
        //     expect(sum).to.equals(159)
        
        //     cy.log(sum)
        // })
        
          

       // using the command js we call verify the sum of table
        cy.tablesum(1,159)
        cy.tablesum(2,163)
     })

})

// cypress commands are asyn in nature ====> and its execution is syn in nature
//if you include the js query method the execution is no more longer sync,
//so we consumes the promises manually  using the block