///<reference types="cypress" />

describe('validate the login function',function(){

    it('verify the login with valid credential',function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials')
        cy.get('#divUsername > .form-hint').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('h1').should('be.visible')

      

    })

    it('validate the login form with invalid credential ',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials')
        cy.get('#divUsername > .form-hint').type('Admin')
        cy.get('#txtPassword').type('admin121')
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should('be.visible')



    })




})


//<span id = "hello" class="form-hint" name="username" >Username</span> // html

// cy.get('#hello')
// cy.get(".form-hin")
// cy.get('span[name="username"]')
// cy.contains('Username')
