///<reference types="cypress" />
describe('verify the contact us form along with navigation',function(){

    it('verify the contact us form',function(){
        //<h1 class = "one" id = "two" name = "nm">Hello</h1>
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.get('.section_header').should('have.text','CONTACT US')
        cy.get('.section_header').invoke('text').then(function(str){
            expect(str).to.eql('CONTACT US')
        })
        cy.validateContactUs('chinmay',"deshpande","chinmay7nov@gmail.com","learning")
        cy.get('input[value="SUBMIT"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
        
    })

    it('verify the contact us form reset functionality',function(){
    
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.validateContactUs('chinmay',"deshpande","chinmay7anov@gmail.com","learning")
        cy.get('input[value="RESET"]').click()
        cy.validateContactUs("","","","")
        
    })
    
    it('verify the contact us form',function(){
        //<h1 class = "one" id = "two" name = "nm">Hello</h1>
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.validateContactUs('chinmay',"deshpande","chinmay7novgmail.com","learning")
        cy.get('input[value="SUBMIT"]').click()
        cy.get('html').should('contain','Invalid')
        
        
    })

    
    it.only('verify the contact us form',function(){
        //<h1 class = "one" id = "two" name = "nm">Hello</h1>
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.validateContactUs('chinmay',"deshpande","chinmay7novgmail.com")
        cy.get('html').should('contain','all fields')
        
        
    })
    
    
    
    // commands ===>  
    
    
    
    //cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //https://webdriveruniversity.com/

    // <h1 class = "one" id = "two" name = "nm">Hello</h1>
    // invoke()?

    // cypress -- jquery


})

// 2012

// 2009 -- math 3 ===>  3 back  m1

// semester =====> 49 =====

// semester --- 4 back  m1

// semeter == 6 

// semeter ------ m1 

// semester 8

// 10 engni

//2012  - 2015

// 2015 - 2017 

// 2022 ==> x

// 80 %

// failuers ---->   today 


