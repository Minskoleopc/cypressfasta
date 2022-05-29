///<reference types="cypress" />
// testcase

describe('verify the contact us form',function(){

    let data ; 
    before(function(){
        cy.fixture('contactus2').then((dataset)=>{
            data = dataset
        })
    })


    // Retrive the value from object dot notation and bracket notation

    it('Testcase case one with test dat set one ',function(){

        cy.log(data)
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(data[0].firstname)
        cy.get('input[name="last_name"]').type(data[0].lastname)
        cy.get('input[name="email"]').type(data[0].email)
        cy.get('textarea[name="message"]').type(data[0].message)
        cy.get('input[value="SUBMIT"]').click()
    })

    it('Testcase case one with test dat set one ',function(){
        cy.log(data)
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(data[1].firstname)
        cy.get('input[name="last_name"]').type(data[1].lastname)
        cy.get('input[name="email"]').type(data[1].email)
        cy.get('textarea[name="message"]').type(data[1].message)
        cy.get('input[value="SUBMIT"]').click()
    })


    // mutiple testcases with different --- import 
    // beforeEach with this ....

    it.only('Testcase case one with test dat set one ',function(){
        cy.log(data)
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.xpath('//*[@id="contact_form"]/input[1]').type(data[1].firstname)
        cy.get('input[name="last_name"]').type(data[1].lastname)
        cy.get('input[name="email"]').type(data[1].email)
        cy.get('textarea[name="message"]').type(data[1].message)
        cy.get('input[value="SUBMIT"]').click()
    })

// cy.get(css selector)
// cy.contains(cssSelector , text)
// cy.xpath() // plug.in  // support index.ts  cy.xpath()  
})