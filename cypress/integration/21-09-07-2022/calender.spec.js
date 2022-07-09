/// <reference types = "cypress"/>

describe('Select date from date picker',function(){

    it('Date picket - example',function(){

    //    let date =  new Date()
    //    cy.log(date.getMonth())
    //    cy.log(date.getFullYear())
    //    cy.log(date.getDate())
    //13 August 2023


        let date2 = new Date()
        date2.setDate(date2.getDate()+ 400)
        let year = date2.getFullYear()
        //let month = date2.getMonth()
        let date = date2.getDate()
        let wmonth = date2.toLocaleString("default",{month:'long'});
        //let mmonth = date2.toLocaleString("default",{month:'short'});


        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()

        function selectMontAndYear(){

            cy.get('.datepicker-switch').first().then(function(el){
                if(! el.text().includes(year)){
                    cy.get('.next').first().click()
                    selectMontAndYear()
                }
            }).then(function(){
                cy.get('.datepicker-switch').first().then(function(el){
                    if(! el.text().includes(wmonth)){
                        cy.get('.next').first().click()
                        selectMontAndYear()
                    }
                })

            })

           // cy.get('.next').first()

        }

        function selectFutureDate(){
            cy.contains(date).click()
        }
        selectMontAndYear()
        selectFutureDate()

    })

    // paytm

})