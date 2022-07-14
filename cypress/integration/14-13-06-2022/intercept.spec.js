describe('verify the Intercept call',function(){
    it('verify the getComment functionality',function(){
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
        cy.get('.network-comment').should('contain','laudantium') 
    })

    it('verify the getComment functionality',function(){
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function(rs){
            return rs.response.body.body
        }).then(function(comment){
            cy.get('.network-comment').should('have.text',comment) 
        })
       
    })

    it.only('verify the POST request using cy.intercept',function(){

        // invoke --- method , its object -- property
        cy.intercept({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments"
        }).as('postComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        //cy.wait('@postComment').its('response.statusCode').should('be.oneOf', [200, 201])
        cy.wait('@postComment').then(function({response,request}){
            //cy.log(response)
            // cy.log(request)
            expect(request.method).to.eqls('POST')
            expect(response.statusCode).to.eqls(201)
            cy.log(response.body)
            expect(response.body).to.have.keys(["name","email","id","body"])
        })
        cy.get('.network-post-comment').should('be.visible')
        cy.get('.network-post-comment').should('have.text','POST successful!')

    })

    
    it('verify the PUT request using cy.intercept',function(){
        // invoke --- method , its object -- property
        cy.intercept({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('updateComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        //cy.wait('@postComment').its('response.statusCode').should('be.oneOf', [200, 201])
        cy.wait('@updateComment').then(function({response,request}){
            expect(request.method).to.eqls('PUT')
            expect(response.statusCode).to.eqls(200)
            cy.log(response.body)
            expect(response.body).to.have.keys(["name","email","id","body"])
        })
        
    })

    it.only('verify the getComment functionality Stubbing',function(){
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }, {
            // response
            statusCode: 200,
            body:{
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "HAPPY",
                "lang":"Hindi"
            }


        }
        
        
        ).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function({response}){
            cy.log(response.body)
        })
        cy.get('.network-comment').should('contain','HAPPY') 
    })


   
   
})


// request ====> service ===Db =====> respond ====>  '180'

// '250'