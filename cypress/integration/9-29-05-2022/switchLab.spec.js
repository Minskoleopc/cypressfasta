///<reference types="cypress" />

describe('various ways to switch tab in cypress',function(){


    // removing the attribute
    it('handling the tab switching first way',()=>{

        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.url().should('contain','Contact-Us')
    })

    // updating the attribute value
    it(' 2nd wayhandling the tab switching first way',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('attr','target','_self').click()
        cy.url().should('contain','Contact-Us')
    })
   
    //  retriving the href attribute value appending with the baseUrl


    it.only(' 2nd wayhandling the tab switching first way',()=>{
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('attr','href').then(function(resource){
            //cy.log(resource)
            cy.visit(`https://webdriveruniversity.com/${resource}`)
        })
        cy.url().should('contain','Contact-Us')
    })
   

    // url click ----> win.location



})




