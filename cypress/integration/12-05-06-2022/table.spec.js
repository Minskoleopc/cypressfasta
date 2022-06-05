///<reference types="cypress" />

describe('verify the table functionality',function(){

    it('sum of table ',function(){
        // let sum = 0
        // cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        // cy.get('#t02').find('tr').each(function(el,index,arr){
        //     if(index != 0){
        //      // cy.log(el.find('td').last().text())
        //        sum = sum +  Number(el.find('td').last().text())
        //     }    
        // }).then(function(){
        //     expect(sum).to.equals(163)
        // }) 

        //cy.log(sum)
       
            // [tr,tr,tr,tr]

            cy.validateTable(1,159)
            cy.validateTable(2,163)



    })


})

// cypress are asyn ===> there execution is sync 
// if we include js jquery execution is no longer sync , so we to consume promise
// manually using then block