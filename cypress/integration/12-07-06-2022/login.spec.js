describe('verify the login functionality',function(){

    it('verify the login functionality',function(){

        cy.visit('/search?q=python')


    })

    it('verify the login functionality',function(){

        cy.visit('/search?q=java')


    })

    it.only('verify the login functionality',function(){
            let url = Cypress.config().baseUrl
            cy.visit(url)
    })



})