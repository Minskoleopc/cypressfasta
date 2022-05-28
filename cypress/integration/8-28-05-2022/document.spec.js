///<reference types="cypress" />

describe('verify the url',function(){

    it.only('verify the url in cypress',function(){

      //  cy.visit('https://opensource-demo.orangehrmlive.com')
      cy.login('Admin','admin123') 
      cy.url().should('contain','dashboard')

      // OrangeHRM

      // getting title by javascript

      cy.document().then(function(doc){
          expect(doc.title).to.equal('OrangeHRM')
      })

      cy.title().then(function(str){
        expect(str).to.equal('OrangeHRM')
      })

      // three 

      // local storage ==>
      // session session ==>
      // cookies







    })


})