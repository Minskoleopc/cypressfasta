///<reference types="cypress" />
// testcase

describe('verify the contact us form',function(){

    let info = {
        firstName:"ninad2",
        lastName:"dani2",
        email:"ninaddani020@gmail.com",
        message:"learning python"
    }

    // Retrive the value from object dot notation and bracket notation

    it('Testcase case one with test dat set one ',function(){

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('ninad')
        cy.get('input[name="last_name"]').type('dani')
        cy.get('input[name="email"]').type('ninad010@gmail.com')
        cy.get('textarea[name="message"]').type('learning javascript')
        cy.get('input[value="SUBMIT"]').click()
    })

    it('Testcase case one with test dat set two ',function(){

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(info.firstName)
        cy.get('input[name="last_name"]').type(info.lastName)
        cy.get('input[name="email"]').type(info.email)
        cy.get('textarea[name="message"]').type(info.message)
        cy.get('input[value="SUBMIT"]').click()

    })


    it.only('Testcase case one with test dat set three using fixture ',function(){
        cy.fixture('contactus').then(function(info){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(info.firstName)
            cy.get('input[name="last_name"]').type(info.lastName)
            cy.get('input[name="email"]').type(info.email)
            cy.get('textarea[name="message"]').type(info.message)
            cy.get('input[value="SUBMIT"]').click()
        })
      
    })


  
})