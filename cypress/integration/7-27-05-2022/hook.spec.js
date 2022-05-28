// mocha framework 
// hooks 
// before()
// beforeEach()
// it()
//afterEach()
// after()


// before()
// beforeEach()
// after()
// afterEach()
//it()
///<reference types="cypress" />
describe('verify the function of hooks',function(){

    before(function(){
        cy.log('Before everthing ... I am before block')
    })

    beforeEach(function(){
        cy.log('I am before testcase ... I am before each block')

    })

    it('verify the testCase one',function(){
        cy.log('Test case one')
    })

    it('Verify the test case two',function(){
        cy.log('Testcase two')
    })

    afterEach(function(){
        cy.log('After each block ..')
    })

    after(function(){
        cy.log('After each block ....')
    })
})