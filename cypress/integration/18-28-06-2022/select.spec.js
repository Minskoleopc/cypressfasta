describe('verify the drop down',function(){


    // it('verify the drop down',function(){
    //     cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    //     cy.get('#dropdowm-menu-1').children().each(function(el,index){
    //             if(el.text().includes('SQL')){
    //                 cy.get('#dropdowm-menu-1').select(el.text())
    //             }
    //     })
    //     cy.get('#dropdowm-menu-1').children().should('have.length',4)

    // })

    it('verify the API response',function(){
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"

        }).then(function(res){
            cy.log(res.status)
            expect(res.status).to.eqls(200)
        })
    })





})