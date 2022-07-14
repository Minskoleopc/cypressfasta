describe('verify the request',function(){

  beforeEach(function(){

    cy.intercept({
        method:"GET",
        url:"https://rest.com.qa"
    }).as('getElement')


  })

    it('verify the button visible',function(){

        cy.visit('https://www.facebook.com')
        cy.get('#f').click({timeout:1000})
        cy.wait('@getElement')
        cy.get('get')


    })

    




})