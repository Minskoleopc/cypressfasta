describe('verify the  delete functionality',function(){
    let token = "4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9"
    it('verify the delete user functionality',function(){

        cy.request({
            method: "GET",
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(function (response) {
            //cy.log(response.)
             expect(response.status).to.eqls(200)
             expect(response.body.length).to.eqls(20)
             return response.body[0].id

        }).then(function(id){
            cy.request({
                method:"DELETE",
                url:`https://gorest.co.in/public/v2/users/${id}`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(function(response){
                expect(response.status).to.eqls(204)
            })

        })



    })

})

// PUT--- update 
// PATCH --- particular field
