describe('verify the intercept conceppt', function () {

    //    beforeEach(function(){

    //    })

    // wait to get response 
    // mock data and stub data
    // validate xhr request and reponse and validate on UI 

    it('verify the user per request', function () {
        cy.intercept({
            method: 'GET',
            url: "https://jsonplaceholder.typicode.com/posts"

        }).as('getUser')

        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.get('a[href="/posts"]').first().click()
        cy.wait('@getUser').then(function ({ request, response }) {
            expect(response.statusCode).to.eq(200)
            expect(response.body).to.have.length(100)
        })

    })

    it('verify the user per request', function () {
        cy.intercept({
            method: 'GET',
            url: "https://jsonplaceholder.typicode.com/posts"

        }, {
            fullName: "chinmay"
        }).as('getUser')

        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.get('a[href="/posts"]').first().click()
        cy.wait('@getUser').then(function ({ request, response }) {
            expect(response.statusCode).to.eq(200)
        })

    })



    it('verify the user per request', function () {
        cy.fixture('user2')
            .then(function (users) {
                //cy.log(users)
                cy.intercept({
                    method: 'GET',
                    url: "https://jsonplaceholder.typicode.com/posts"

                },users).as('getUser')

                cy.visit('https://jsonplaceholder.typicode.com/')
                cy.get('a[href="/posts"]').first().click()
                cy.wait('@getUser').then(function ({ request, response }) {
                    expect(response.statusCode).to.eq(200)
                })

            })

    })

    // cy.intercept({
    //     method:'GET',
    //     url:"https://jsonplaceholder.typicode.com/posts"

    // },).as('getUser')

    // cy.visit('https://jsonplaceholder.typicode.com/')
    // cy.get('a[href="/posts"]').first().click()
    // cy.wait('@getUser').then(function({request,response}){
    //     expect(response.statusCode).to.eq(200)
    // })

    // alerts

})



